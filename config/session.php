<?php

return [
	'driver' => env('SESSION_DRIVER', 'file'),
	'lifetime' => 999999,
	'expire_on_close'=>false,
	'encrypt'=>false,
	'files'=>storage_path('framework/session'),
	'connection'=>null,
	'table'=>'sessions',
	'lottery'=>[2,100],
	'cookie'=>'laravel_session',
	'path'=>'/',
	'domain'=>null,
	'secure'=>false,
];
