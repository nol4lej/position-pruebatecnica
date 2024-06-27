<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->date('fecha');
            $table->decimal('monto', 10, 2);
            $table->boolean('estado')->default(true);
            $table->timestamps();
        
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade'); // indica que si un registro en la tabla users es eliminado, todas las filas relacionadas en la tabla transactions que tengan el user_id correspondiente también serán eliminadas de manera automática
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
