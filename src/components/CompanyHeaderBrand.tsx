import React from 'react';
import { motion } from 'motion/react';

interface CompanyHeaderBrandProps {
  className?: string;
  subtitle?: string;
}

export const CompanyHeaderBrand: React.FC<CompanyHeaderBrandProps> = ({
  className = '',
  subtitle,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`space-y-1.5 ${className}`}
    >
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-germania text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-wide text-[#0F172A] leading-tight antialiased">
          Electro Acoustic Infotech
        </span>
        <span className="font-germania text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-wide text-[#1570EF] leading-tight antialiased">
          Pvt. Ltd.
        </span>
      </div>
      <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#1570EF] via-[#2563EB] to-[#1D4ED8] rounded-full shadow-2xs" />
      {subtitle && (
        <p className="text-xs sm:text-sm text-[#475569] font-medium pt-0.5">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

