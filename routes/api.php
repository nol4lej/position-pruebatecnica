<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix("auth")->group(function () {
    Route::get("/", function () {
        return "hola";
    })->name("");
});

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
