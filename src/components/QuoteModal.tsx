import React, { useState } from 'react';
import { X, CheckCircle, Send, ArrowRight } from 'lucide-react';
import Button from './Button';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    product: 'Vanilla Planifolia',
    grade: 'Grade A Gourmet',
    quantity: '',
    application: 'Food & Bakery',
    destinationPort: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Super Vanilla Export Team! My name is ${formData.name || 'a buyer'} from ${formData.company || 'our company'} (${formData.country || 'International'}). We are interested in wholesale ${formData.product} (${formData.grade}), estimated quantity: ${formData.quantity || 'TBD'}. Destination port: ${formData.destinationPort || 'TBD'}.`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#051A24]/60 backdrop-blur-sm animate-fade-in-up">
      <div
        className="bg-white rounded-[32px] md:rounded-[40px] max-w-2xl w-full p-6 md:p-10 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 w-10 h-10 rounded-full border border-[#0D212C]/10 flex items-center justify-center text-[#051A24] hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-14 h-14 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-mondwest text-3xl font-semibold text-[#051A24] mb-3">
              Quotation Request Received
            </h3>
            <p className="text-sm md:text-base text-[#051A24]/75 leading-relaxed max-w-md mx-auto mb-6">
              Thank you, {formData.name}. Our export procurement team will review your specifications
              for {formData.product} ({formData.grade}) and provide a formal FOB/CIF wholesale quotation
              to <strong>{formData.email}</strong> within 24 business hours.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 bg-[#051A24] text-white rounded-full px-6 py-3 text-sm font-medium shadow-button-primary hover:bg-[#092736] transition-all"
              >
                <span>Direct WhatsApp Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-200 text-sm font-medium text-[#051A24] hover:bg-slate-50 transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="font-mono text-xs text-[#051A24]/70 uppercase tracking-wider block mb-1">
                Direct B2B Sourcing · Origin Indonesia
              </span>
              <h3 className="font-mondwest text-2xl md:text-3xl font-semibold text-[#0D212C]">
                Request Wholesale Quotation
              </h3>
              <p className="text-xs md:text-sm text-[#051A24]/70 mt-1">
                Tell us your preferred vanilla grade, estimated quantity, and destination port. Our export team responds within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#051A24] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-[#051A24] focus:outline-none focus:border-[#051A24] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#051A24] mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pacific Flavor Labs"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-[#051A24] focus:outline-none focus:border-[#051A24] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#051A24] mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="procurement@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-[#051A24] focus:outline-none focus:border-[#051A24] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#051A24] mb-1">
                    Destination Country *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. United States, Germany, Japan"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-[#051A24] focus:outline-none focus:border-[#051A24] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#051A24] mb-1">
                    Product Specification
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-[#051A24] focus:outline-none focus:border-[#051A24] bg-white transition-colors"
                  >
                    <option value="Vanilla Planifolia">Vanilla Planifolia (Bourbon type)</option>
                    <option value="Vanilla Tahitensis">Vanilla Tahitensis (Floral / Fruity)</option>
                    <option value="Bulk Wholesale Beans">Bulk Wholesale Vanilla Beans</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#051A24] mb-1">
                    Grade
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-[#051A24] focus:outline-none focus:border-[#051A24] bg-white transition-colors"
                  >
                    <option value="Grade A Gourmet">Grade A Gourmet (Plump, 28-33% Moisture)</option>
                    <option value="Grade B Extract">Grade B Extract (Concentrated, 20-25% Moisture)</option>
                    <option value="Custom Specification">Custom / Unsplit Specification</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#051A24] mb-1">
                    Estimated Quantity (kg)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 50 kg, 200 kg, 1,000 kg"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-[#051A24] focus:outline-none focus:border-[#051A24] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#051A24] mb-1">
                    Destination Port / Airport
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Los Angeles (LAX / Port), Rotterdam"
                    value={formData.destinationPort}
                    onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-[#051A24] focus:outline-none focus:border-[#051A24] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#051A24] mb-1">
                  Application / Industry
                </label>
                <select
                  value={formData.application}
                  onChange={(e) => setFormData({ ...formData, application: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-[#051A24] focus:outline-none focus:border-[#051A24] bg-white transition-colors"
                >
                  <option value="Food & Bakery">Bakery, Pastry & Food Manufacturing</option>
                  <option value="Extract Production">Vanilla Extract & Flavor Manufacturing</option>
                  <option value="Ice Cream & Dairy">Ice Cream & Dairy Products</option>
                  <option value="Chocolate & Confectionery">Chocolate & Confectionery</option>
                  <option value="Beverage & Brewing">Beverage & Craft Brewing</option>
                  <option value="Cosmetics & Fragrance">Cosmetics & Personal Care</option>
                  <option value="Spice Wholesale Distribution">Spice Wholesale & Import Distribution</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#051A24] mb-1">
                  Message / Specific Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your moisture preference, vanillin requirements, bean length, or sample request..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-[#051A24] focus:outline-none focus:border-[#051A24] transition-colors resize-none"
                />
              </div>

              <div className="mt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <Button variant="primary" type="submit" className="w-full sm:w-auto !py-3">
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Request Wholesale Quotation
                  </span>
                </Button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="text-xs text-[#051A24]/75 hover:text-[#051A24] underline transition-colors"
                >
                  Need instant WhatsApp assistance? Click here
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteModal;
