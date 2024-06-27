<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function register(RegisterRequest $request)
    {

        $user = User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => Hash::make($request->password)
        ]);

        $token = $user->createToken("auth_token")->plainTextToken;

        return response()->json([
            'data' => $user,
            'token' => $token,
            'token_type' => 'Bearer'
        ]);

    }

    public function login(LoginRequest $request)
    {

        if (!Auth::attempt([
                'email' => $request->email, 
                'password' => $request->password
            ])) {
            return response()->json([
                'message' => 'Credenciales incorrectas'
            ], 401);
        }

        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'data' => $user,
            'token' => $token,
            'token_type' => 'Bearer'
        ], 200);
    }

    public function logout()
    {
        if (auth()->check()) {

            auth()->user()->tokens()->delete();

            return response()->json([
                "message" => "Usuario desconectado satisfactoriamente"
            ], 204); // No Content

        }
    
        return response()->json([
            "message" => "Usuario no autenticado"
        ], 401);
    }
    

}
