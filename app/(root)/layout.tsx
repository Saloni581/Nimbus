import Sidebar from "@/components/Sidebar";
import MobileNavigation from "@/components/MobileNavigation";
import Header from "@/components/Header";
import {getCurrentUser} from "@/lib/actions/user.actions";
import {redirect} from "next/navigation";
import { Toaster } from "@/components/ui/sonner"

const Layout = async ({ children }: {children: React.ReactNode}) => {

    const currentUser = await getCurrentUser();
    if(!currentUser) redirect('/sign-in');

    return (
        <main className="flex h-screen">
            <Sidebar {...currentUser} />
            <section className="flex flex-col flex-1 h-full">
                <MobileNavigation {...currentUser} />
                <Header userId={currentUser.$id} accountId={currentUser.$id} />
                <div className="main-content">
                    {children}
                </div>
            </section>
            <Toaster />
        </main>
    );
};

export default Layout;