<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TransactionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
});


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/transaction', [TransactionController::class, 'store']);
    Route::get('/transaction', [TransactionController::class, 'index']);
    Route::put('/transaction/{id}', [TransactionController::class, 'update']);
    Route::post('/transaction/{id}', [TransactionController::class, 'changeStatus']);
});

// Route::get('/user', function (Request $request) {
//     return $request->user();
// });
