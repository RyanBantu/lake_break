import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface StoreLayoutProps {
  children: React.ReactNode;
}

/** Shared chrome for shop pages (fixed header + footer). */
const StoreLayout = ({ children }: StoreLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col shadow-lg shadow-black/40 border-b border-primary/10">
        <AnnouncementBar />
        <Navbar />
      </header>
      <main className="flex-1 w-full pt-[var(--header-h,8.75rem)]">{children}</main>
      <Footer />
    </div>
  );
};

export default StoreLayout;
