import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col shadow-lg shadow-black/40 border-b border-primary/10">
        <AnnouncementBar />
        <Navbar />
      </header>
      <Hero />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
