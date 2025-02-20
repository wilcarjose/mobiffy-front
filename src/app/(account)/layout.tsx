'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/components/user/Navigation'
import Loading from '@/components/user/Loading'

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <div className="nc-CheckoutPage">
            <main className="container py-16 pt-0 ">
        
                <Navigation user={user} />

                {children}
            </main>
        </div>
    )
}

export default AppLayout
