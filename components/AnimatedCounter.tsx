'use client';

import { formatAmount } from '@/lib/utils'
import CountUp from 'react-countup'

function AnimatedCounter({amount}: {amount:number}) {
    return (
        <div className='w-full'>
            <CountUp
                end={amount}
                decimal=","
                prefix="$"
                duration={2}
                decimals={2}
            />
        </div>
  )
}

export default AnimatedCounter