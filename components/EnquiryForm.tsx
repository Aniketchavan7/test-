import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { INDUSTRIES } from '../constants';
import { EnquiryFormValues } from '../types';

interface EnquiryFormProps {
  initialValues?: Partial<EnquiryFormValues>;
  className?: string;
  onSuccess?: () => void;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialValues, className = '', onSuccess }) => {
  const [formData, setFormData] = useState<EnquiryFormValues>({
    name: '',
    contactNumber: '',
    email: '',
    industry: '',
    company: '',
    product: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    if (initialValues) {
      setFormData(prev => ({ ...prev, ...initialValues }));
    }
  }, [initialValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    setTimeout(() => {
      setStatus('success');
      console.log('Duramet Enquiry Sent:', formData);
      if (onSuccess) onSuccess();
      setTimeout(() => {
        setStatus('idle');
        setFormData({
          name: '',
          contactNumber: '',
          email: '',
          industry: '',
          company: '',
          product: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className={`flex flex-col items-center justify-center p-8 bg-orange-50 rounded border border-orange-200 ${className}`}>
        <CheckCircle size={48} className="text-orange-600 mb-4" />
        <h3 className="text-xl font-bold text-orange-900 mb-2 uppercase tracking-tight">Request Received</h3>
        <p className="text-orange-800 text-center text-sm font-medium">
          Your enquiry has been routed to our technical sales team. We will respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white p-8 rounded border border-slate-100 shadow-sm ${className}`}>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white">
          <Send size={16} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 uppercase tracking-widest">Enquiry Initiation</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Primary Contact Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-orange-600 outline-none transition-all text-sm font-medium"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Phone Number *</label>
          <input
            type="tel"
            name="contactNumber"
            required
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-orange-600 outline-none transition-all text-sm font-medium"
            placeholder="+65 0000 0000"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Business Email Address *</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-orange-600 outline-none transition-all text-sm font-medium"
          placeholder="procurement@company.com"
        />
      </div>

      <div className="mb-6">
        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Sector / Industry</label>
        <select
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-orange-600 outline-none transition-all text-sm font-bold appearance-none cursor-pointer"
        >
          <option value="">Select Sector</option>
          {INDUSTRIES.map(ind => (
            <option key={ind.id} value={ind.name}>{ind.name}</option>
          ))}
          <option value="General">Other / General</option>
        </select>
      </div>

      {(formData.company || formData.product) && (
        <div className="bg-orange-50 p-4 rounded mb-6 text-xs text-orange-900 border border-orange-100 flex items-center gap-3">
           <div className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse"></div>
           <div>
             <span className="font-bold uppercase tracking-widest text-[9px]">Target Context:</span> 
             <span className="font-medium ml-2">{formData.company} {formData.product && `| ${formData.product}`}</span>
           </div>
        </div>
      )}

      <div className="mb-8">
        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Technical Requirements *</label>
        <textarea
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-orange-600 outline-none transition-all text-sm font-medium resize-none"
          placeholder="Please list part numbers, specifications, or compliance standards required..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-[0.2em] text-xs"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Processing...
          </>
        ) : (
          'Send Technical Enquiry'
        )}
      </button>
    </form>
  );
};

export default EnquiryForm;