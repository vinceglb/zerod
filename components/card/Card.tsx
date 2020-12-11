import React from 'react'

export interface CardProps {
  title?: string
}

export const Card: React.FC<CardProps> = () => (
  <div className="bg-white rounded-xl shadow-md w-96 p-4">
    <div>
      <img
        className="rounded-lg"
        src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt="test"
      />
    </div>
    <div className="mx-6 mt-6 mb-3">
      <h2 className="font-bold text-2xl text-gray-800 mb-4">Épiceries</h2>

      <p className="font-medium text-gray-600 mb-4">
        All food used with full invoice and clear origin. Hello world bro.
      </p>

      <p className="font-semibold text-primary">Voir les épiceries</p>
    </div>
  </div>
)
