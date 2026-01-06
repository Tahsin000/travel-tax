<?php

use Illuminate\Support\Facades\Route;

// catch-all for Vue routes
Route::view('/{any}', 'app')
  ->where('any', '^(?!admin).*$');