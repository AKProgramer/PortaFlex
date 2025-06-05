"use client"
import React, { useEffect, useState } from 'react';
import usePortfolioStore from '@/store/usePortfolioStore';
import FullPageLoader from '@/components/Loader/FullPageLoader';
import ViewTemplate from '@/components/TemplateIFramePage/ViewTemplate';

export default function TemplateIFramePage({ params }) {
  const { id } = params;
  const { portfolios, fetchPortfolios, loading } = usePortfolioStore();
  const [vercelLink, setVercelLink] = useState(null);

  useEffect(() => {
    fetchPortfolios();
  }, [fetchPortfolios]);

  useEffect(() => {
    if (portfolios && portfolios.length > 0) {
      const found = portfolios.find((t) => t._id === id);
      setVercelLink(found?.vercelDeploymentLink || null);
    }
  }, [portfolios, id]);

  if (loading) return <FullPageLoader/>;
  if (!vercelLink) return <div>Template not found or no deployment link.</div>;

  return (
    <ViewTemplate vercelLink={vercelLink}/>
  );
}
