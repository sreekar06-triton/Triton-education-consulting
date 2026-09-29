import React from 'react';
import { X, Code, Server, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CLEARTRIP_API_SCHEMA } from '../data/flights';

export default function CleartripApiModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8">
      <div className="bg-[#070709] border border-white/20 w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 md:p-10 shadow-2xl relative text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white bg-transparent border-none cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <Code className="w-6 h-6 text-white" />
          <span className="label-mono text-white/50">SYSTEM ARCHITECTURE</span>
        </div>

        <h3 className="display-large text-2xl md:text-3xl font-bold uppercase mb-2">
          Cleartrip Flight API Integration
        </h3>

        <p className="font-sans text-sm text-white/70 font-light mb-8">
          Technical specifications for seamless real-time flight availability, student discount validation, and ticket booking synchronization.
        </p>

        <div className="space-y-6 font-mono text-xs">
          
          {/* Endpoint box */}
          <div className="bg-[#121217] border border-white/10 p-4">
            <span className="text-white/40 block text-[0.65rem] mb-1">PROD API ENDPOINT</span>
            <code className="text-white font-bold">{CLEARTRIP_API_SCHEMA.endpoint}</code>
          </div>

          {/* Auth info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#121217] border border-white/10 p-4">
              <span className="text-white/40 block text-[0.65rem] mb-1">AUTHENTICATION</span>
              <span className="text-white font-medium">{CLEARTRIP_API_SCHEMA.authMethod}</span>
            </div>
            <div className="bg-[#121217] border border-white/10 p-4">
              <span className="text-white/40 block text-[0.65rem] mb-1">PARTNER REF ID</span>
              <span className="text-white font-medium">{CLEARTRIP_API_SCHEMA.samplePayload.partnerRefId}</span>
            </div>
          </div>

          {/* Code Payload Preview */}
          <div>
            <span className="text-white/50 block text-xs mb-2">SAMPLE REQUEST PAYLOAD (JSON)</span>
            <pre className="bg-[#0e0e12] border border-white/15 p-4 overflow-x-auto text-white/80 leading-relaxed rounded-none">
{JSON.stringify(CLEARTRIP_API_SCHEMA.samplePayload, null, 2)}
            </pre>
          </div>

          {/* Feature List */}
          <div className="pt-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-3 text-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>Real-time seat map preview</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>Automated student status verification</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>Extra 10kg-15kg student luggage tag</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>Instant PNR generation & WhatsApp dispatch</span>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="btn-pill-white !py-2.5 !px-6"
          >
            CLOSE ARCHITECTURE INSPECTOR
          </button>
        </div>

      </div>
    </div>
  );
}
