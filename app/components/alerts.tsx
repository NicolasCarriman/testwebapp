import React from 'react'
import type { IAlert } from '~/model/alert'

interface Props {
  alerts: IAlert[]
}

function Alert({ alerts }: Props) {
  return (
    <div>
      {
        alerts.map(alert =>
          <div key={alert.id} className={`p-4 border rounded-2xl ${alert.type === 'success' ? 'border-green-700 bg-green-300 text-white' : 'border-red-800 bg-red-500 text-white'}`}>{alert.message}</div>
        )
      }
    </div>
  )
}

export default Alert