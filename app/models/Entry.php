<?php

class Entry extends Eloquent
{
    protected $softDelete = true;

    protected $guarded = ['id', 'created_at', 'updated_at', 'user_id', 'deleted_at'];
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'entry';

    protected $hidden = [
        'deleted_at', 'password'
    ];

    protected $appends = ['can_edit'];

    public function getCanEditAttribute()
    {
        return $this->user_id == Auth::user()->id || (isset($this->groupAccess->id) && $this->groupAccess->{Auth::user()->group} == true);
    }

    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = Crypt::encrypt($value);
    }

    public function getPasswordAttribute($value)
    {
        return Crypt::decrypt($value);
    }

    public function groupAccess()
    {
        return $this->hasOne('GroupAccess', 'entry_id');
    }

    public function project()
    {
        return $this->belongsTo('Project', 'project_id');
    }

    public function owner()
    {
        return $this->belongsTo('User', 'user_id');
    }
}