import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Box, ShoppingCart, Check, Search, Grid, Info, Filter } from 'lucide-react';
import { INDUSTRIES } from '../constants';
import EnquiryForm from '../components/EnquiryForm';
import Modal from '../components/Modal';
import { Industry, Product } from '../types';

const IndustryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [industry, setIndustry] = useState<Industry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContext, setSelectedContext] = useState<{
    company?: string;
    product?: string;
  }>({});

  useEffect(() => {
    const found = INDUSTRIES.find(ind => ind.slug === slug);
    if (found) {
      setIndustry(found);
    }
  }, [slug]);

  // Flatten all products from all partners into a single inventory list
  const allProducts = useMemo(() => {
    if (!industry) return [];
    const products: (Product & { partnerName: string })[] = [];
    industry.partners.forEach(partner => {
      partner.products.forEach(product => {
        products.push({ ...product, partnerName: partner.name });
      });
    });
    return products;
  }, [industry]);

  const filteredProducts = useMemo(() => {
    return allProducts.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.partnerName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [allProducts, searchQuery]);

  const handleEnquireClick = (partnerName: string, productName?: string) => {
    setSelectedContext({
      company: partnerName,
      product: productName
    });
    setIsModalOpen(true);
  };

  if (!industry) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
        <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Sector Not Identified</h2>
        <Link to="/industries" className="text-orange-600 font-bold hover:underline flex items-center gap-2 uppercase tracking-widest text-xs">
          <ArrowLeft size={16} /> Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-32">
      {/* Immersive Hero Section */}
      <div className="bg-slate-950 text-white py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <img src={industry.image} alt="" className="w-full h-full object-cover grayscale blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl">
             <Link to="/industries" className="reveal inline-flex items-center gap-2 text-orange-500 text-[10px] font-black uppercase tracking-[0.4em] mb-12 hover:text-white transition-colors">
               <ArrowLeft size={14} /> Back to Catalog
             </Link>
             <div className="reveal text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mb-4">Industrial Vertical</div>
             <h1 className="reveal text-7xl md:text-9xl font-black mb-10 tracking-tight leading-[0.8] uppercase">
               {industry.name} <br />
               <span className="text-orange-600 block mt-2">Inventory.</span>
             </h1>
             <p className="reveal text-2xl text-slate-400 leading-relaxed font-medium mb-16 max-w-3xl" style={{ transitionDelay: '100ms' }}>
               Browsing authorized, high-precision components and engineering assets for the {industry.name} sector.
             </p>
             
             <div className="reveal flex flex-wrap gap-12 border-t border-white/10 pt-12" style={{ transitionDelay: '200ms' }}>
               <div className="flex flex-col">
                 <span className="text-orange-600 text-4xl font-black leading-none">{allProducts.length}</span>
                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">Hero Components</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-white text-4xl font-black leading-none">{industry.partners.length}</span>
                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">Global Sources</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-white text-4xl font-black leading-none">100%</span>
                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">Traceability</span>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Floating Modern Filter Bar */}
      <div className="container mx-auto px-4 md:px-6 -mt-12 relative z-30 mb-20">
        <div className="bg-white rounded-[32px] shadow-2xl border border-slate-100 p-4 md:p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="relative flex-grow w-full">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder={`Quick search ${industry.name} catalog...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-sm focus:border-orange-600 outline-none transition-all"
            />
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button className="flex items-center gap-3 px-8 py-5 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-colors">
              <Filter size={16} className="text-orange-500" /> Filter Specs
            </button>
            <div className="hidden lg:flex items-center gap-2 px-6 py-5 bg-slate-50 rounded-2xl border border-slate-100 text-[9px] font-black text-slate-400 uppercase tracking-widest">
              <ShieldCheck size={16} className="text-orange-600" /> Authorized Supply Only
            </div>
          </div>
        </div>
      </div>

      {/* Strict Square Block Gallery Grid */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, i) => (
              <div 
                key={product.id} 
                className="reveal group relative aspect-square bg-slate-950 rounded-[32px] overflow-hidden hover-glow transition-all duration-700 shadow-xl border border-white/5"
                style={{ transitionDelay: `${(i % 12) * 50}ms` }}
              >
                {/* Product Image Background */}
                <div className="absolute inset-0 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-800 bg-slate-900">
                      <Box size={64} />
                    </div>
                  )}
                </div>

                {/* Industrial Aesthetic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute inset-0 border-[1px] border-white/10 group-hover:border-orange-600/50 rounded-[32px] transition-colors pointer-events-none"></div>

                {/* High-End Information Layer */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  {/* Top Bar - Tag and Quick Action */}
                  <div className="mb-auto flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0">
                    <span className="bg-orange-600 text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-2xl">
                      {product.partnerName}
                    </span>
                    <button 
                      onClick={() => handleEnquireClick(product.partnerName, product.name)}
                      className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-2xl hover:bg-orange-600 hover:text-white transition-all transform hover:rotate-12"
                      title="Quick Enquiry"
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>

                  {/* Bottom Bar - Title and Details */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                       <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                       <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">SKU: {product.id}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase leading-[0.9] group-hover:text-orange-500 transition-colors">
                      {product.name}
                    </h3>
                    
                    {/* Expandable Meta on Hover */}
                    <div className="mt-6 max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                      <p className="text-slate-300 text-[11px] font-medium leading-relaxed mb-6 line-clamp-3">
                        {product.description}
                      </p>
                      <button 
                         onClick={() => handleEnquireClick(product.partnerName, product.name)}
                         className="flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-widest border-b-2 border-orange-600 pb-1 hover:text-orange-500 transition-colors"
                      >
                         Technical Datasheet <Check size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-40 text-center bg-slate-50 rounded-[40px] border-2 border-dashed border-slate-200">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl mb-8 shadow-xl text-slate-200">
                <Box size={48} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">No matching assets found</h3>
              <p className="text-slate-500 font-medium max-w-sm mx-auto">Try adjusting your search filters or browse the complete industrial catalog.</p>
            </div>
          )}

          {/* Scalable "Custom SKU" Block */}
          <div className="reveal aspect-square bg-slate-900 rounded-[32px] p-12 flex flex-col items-center justify-center text-center group hover:bg-slate-950 transition-all duration-500 relative overflow-hidden" style={{ transitionDelay: '300ms' }}>
             <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 blur-[60px] rounded-full"></div>
             <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-orange-600 mb-8 group-hover:scale-110 transition-transform">
                <Grid size={36} />
             </div>
             <h4 className="text-xl font-black text-white uppercase tracking-tight mb-3">Custom Sourcing</h4>
             <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-10">Access 5,000+ Verified SKUs</p>
             <button 
                onClick={() => handleEnquireClick("Global Procurement Request")}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl shadow-orange-600/20"
             >
                Start RFQ Process
             </button>
          </div>
        </div>
      </div>

      {/* Industrial Certification Footer */}
      <div className="container mx-auto px-4 md:px-6 py-32">
        <div className="reveal max-w-6xl mx-auto bg-slate-950 rounded-[40px] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl border border-white/5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[150px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-none">SECTOR-WIDE <br /><span className="text-orange-600">COMPLIANCE.</span></h2>
            <p className="text-slate-400 text-xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
              Every asset within the {industry.name} directory is verified for traceability and manufacturer authorization.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => handleEnquireClick("Certification Documentation")}
                className="bg-white hover:bg-orange-600 hover:text-white text-slate-900 px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all"
              >
                Traceability Reports
              </button>
              <button 
                onClick={() => handleEnquireClick("Bulk Supply Consultation")}
                className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl shadow-orange-600/20"
              >
                Bulk Supply RFQ
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="DURAMET PROCUREMENT INQUIRY"
      >
        <EnquiryForm 
          initialValues={{
            industry: industry.name,
            company: selectedContext.company,
            product: selectedContext.product
          }}
          onSuccess={() => setTimeout(() => setIsModalOpen(false), 2000)}
        />
      </Modal>
    </div>
  );
};

export default IndustryDetail;