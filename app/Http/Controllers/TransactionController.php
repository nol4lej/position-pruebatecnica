<?php

namespace App\Http\Controllers;

use App\Http\Requests\TransactionRequest;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = $this->getUserTransactions();

        if ($transactions->isEmpty()) {
            return response()->json([
                "message" => "No se encontraron transacciones para el usuario actual"
            ], 404);
        }

        return response()->json([
            "data" => $transactions
        ], 200);
    }

    public function store(TransactionRequest $request)
    {
        $fecha = Carbon::parse($request->fecha)->format('Y-m-d H:i:s');

        $transaction = Transaction::create([
            "user_id" => $request->user()->id,
            "fecha" => $fecha,
            "monto" => $request->monto,
        ]);

        return response()->json([
            "data" => $transaction
        ], 201);
    }

    public function show($id)
    {
        $transaction = $this->findUserTransaction($id);

        if (!$transaction) {
            return response()->json(['error' => 'Transacción no encontrada o usuario inválido'], 404);
        }

        return response()->json([
            "data" => $transaction
        ], 200);
    }

    public function update(TransactionRequest $request, Transaction $transaction)
    {
        $transaction->update($request->only(['fecha', 'monto']));

        return response()->json([
            "data" => $transaction
        ], 200);
    }

    public function changeStatus(Request $request, $id)
    {
        $request->validate([
            'estado' => ['required', 'in:0,1'],
        ]);

        $transaction = $this->findUserTransaction($id);

        if (!$transaction) {
            return response()->json(['error' => 'Transacción no encontrada o usuario inválido'], 404);
        }

        $transaction->update(['estado' => $request->estado]);

        return response()->json([
            "message" => "Estado actualizado correctamente",
            "data" => $transaction
        ], 200);
    }

    /**
     * Encontrar una transacción del usuario autenticado
     *
     * @param int $id
     * @return Transaction|null
     */
    private function findUserTransaction($id)
    {
        return Transaction::where('id', $id)
            ->where('user_id', auth()->id())
            ->first();
    }

    /**
     * Obtener todas las transacciones del usuario autenticado
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    private function getUserTransactions()
    {
        return Transaction::where('user_id', auth()->id())->get();
    }
}
