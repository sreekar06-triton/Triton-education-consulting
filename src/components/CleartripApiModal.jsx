import React from 'react';
import { X, Code, Server, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CLEARTRIP_API_SCHEMA } from '../data/flights';

export default function CleartripApiModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-6 sm:p-10">
      <div className="bg-[#0e0e12] border border-white/20 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 sm:p-12 md:p-14 shadow-2xl relative text-white space-y-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-white/50 hover:text-white bg-transparent border-none cursor-pointer p-2 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Code className="w-6 h-6 text-white" />
            <span className="label-mono text-white/50">SYSTEM ARCHITECTURE</span>
          </div>

          <h3 className="display-large text-2xl md:text-3xl font-bold uppercase">
            Cleartrip Flight API Integration
          </h3>

          <p className="font-sans text-sm md:text-base text-white/70 font-light max-w-prose-editorial">
            Technical specifications for seamless real-time flight availability, student discount validation, and ticket booking synchronization.
          </p>
        </div>

        <div className="space-y-6 font-mono text-xs">
          
          {/* Endpoint box */}
          <div className="bg-[#14141c] border border-white/15 p-6 rounded-xl space-y-1">
            <span className="text-white/40 block text-[0.68rem] tracking-wider uppercase">PROD API ENDPOINT</span>
            <code className="text-white font-bold text-sm">{CLEARTRIP_API_SCHEMA.endpoint}</code>
          </div>

          {/* Auth info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#14141c] border border-white/15 p-6 rounded-xl space-y-1">
              <span className="text-white/40 block text-[0.68rem] tracking-wider uppercase">AUTHENTICATION</span>
              <span className="text-white font-medium text-sm">{CLEARTRIP_API_SCHEMA.authMethod}</span>
            </div>
            <div className="bg-[#14141c] border border-white/15 p-6 rounded-xl space-y-1">
              <span className="text-white/40 block text-[0.68rem] tracking-wider uppercase">PARTNER REF ID</span>
              <span className="text-white font-medium text-sm">{CLEARTRIP_API_SCHEMA.samplePayload.partnerRefId}</span>
            </div>
          </div>

          {/* Code Payload Preview */}
          <div className="space-y-2">
            <span className="text-white/50 block text-xs tracking-wider uppercase">SAMPLE REQUEST PAYLOAD (JSON)</span>
            <pre className="bg-[#070709] border border-white/15 p-6 rounded-xl overflow-x-auto text-white/80 leading-relaxed font-mono">
{JSON.stringify(CLEARTRIP_API_SCHEMA.samplePayload, null, 2)}
            </pre>
          </div>

          {/* Feature List */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Real-time seat map preview</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Automated student status verification</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Extra 10kg-15kg student luggage tag</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Instant PNR generation & WhatsApp dispatch</span>
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="btn-pill-white !py-3 !px-8"
          >
            CLOSE ARCHITECTURE INSPECTOR
          </button>
        </div>

      </div>
    </div>
  );
}
