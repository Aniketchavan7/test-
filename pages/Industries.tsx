import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Filter, Factory, LayoutGrid, List } from 'lucide-react';
import { INDUSTRIES } from '../constants';

const Industries: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(INDUSTRIES.map(i => i.category)))];
  }, []);

  const filteredIndustries = useMemo(() => {
    return INDUSTRIES.filter(ind => {
      const matchesSearch = ind.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            ind.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || ind.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header Section - Modern High Contrast */}
      <div className="bg-slate-950 text-white py-32 border-b border-orange-600/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[150px] rounded-full"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="reveal inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-orange-500 text-[10px] font-black tracking-[0.4em] uppercase mb-8">
              Industrial Catalog v2.5
            </span>
            <h1 className="reveal text-5xl md:text-8xl font-black mb-10 tracking-tight leading-none">SECTOR <br /><span className="text-orange-600">DIRECTORIES.</span></h1>
            <p className="reveal text-xl text-slate-400 font-medium max-w-2xl leading-relaxed" style={{ transitionDelay: '100ms' }}>
              Access authorized supply ecosystems for critical engineering verticals. Our platform is built to scale alongside your evolving technical procurement needs.
            </p>
          </div>
        </div>
      </div>

      {/* Modern Control Bar */}
      <div className="sticky top-20 z-40 glass border-b border-slate-100 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col xl:flex-row gap-6 items-center justify-between">
          <div className="flex flex-col md:flex-row items-center gap-6 w-full xl:w-auto">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text"
                placeholder="Find an industry or sector..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-sm focus:border-orange-600 outline-none transition-all shadow-inner"
              />
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all duration-300 ${
                    activeCategory === cat 
                    ? 'bg-orange-600 border-orange-600 text-white shadow-lg shadow-orange-600/20' 
                    : 'bg-white border-slate-100 text-slate-400 hover:text-orange-600 hover:border-orange-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* View Toggle */}
          <div className="hidden xl:flex items-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-white text-orange-600 shadow-sm' : 'text-slate-400'}`}
            >
              <LayoutGrid size={20} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-xl transition-all ${viewMode === 'list' ? 'bg-white text-orange-600 shadow-sm' : 'text-slate-400'}`}
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Grid Display - Scalable Cards */}
      <div className="container mx-auto px-4 md:px-6 py-20">
        {filteredIndustries.length > 0 ? (
          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-10`}>
            {filteredIndustries.map((industry, i) => (
              <Link 
                key={industry.id} 
                to={`/industries/${industry.slug}`}
                className={`reveal group flex ${viewMode === 'grid' ? 'flex-col' : 'flex-row items-center'} bg-white rounded-[32px] border border-slate-100 hover:border-orange-600 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className={`${viewMode === 'grid' ? 'h-64 w-full' : 'h-48 w-64 shrink-0'} overflow-hidden relative`}>
                  <img src={industry.image} alt={industry.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-slate-900/90 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest">
                      {industry.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-6">
                    <Factory className="text-orange-600" size={18} />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sector Code: ID-{industry.id}00</span>
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight uppercase group-hover:text-orange-600 transition-colors leading-none">
                    {industry.name}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium mb-10 leading-relaxed line-clamp-2 flex-grow">
                    {industry.shortDescription}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-slate-100 pt-8 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-xl font-black text-slate-900 leading-none">{industry.partners.length}</span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Sourcing Partners</span>
                    </div>
                    <div className="w-12 h-12 bg-slate-50 group-hover:bg-orange-600 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-white transition-all duration-300 group-hover:rotate-12">
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-slate-50 rounded-3xl mb-10 text-slate-200">
              <Filter size={48} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">No sectors matched your search</h3>
            <p className="text-slate-500 max-w-sm mx-auto font-medium">Try broadening your search or resetting the industrial category filter.</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
              className="mt-10 bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Industries;