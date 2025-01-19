"use client";

import { StarknetConfig, InjectedConnector } from '@starknet-react/core';

export function Providers({ children }: { children: React.ReactNode }) {
  const chains = {
    // Add your network configuration
  };
  
  const connectors = [
    new InjectedConnector({ options: { id: 'braavos' }}),
    new InjectedConnector({ options: { id: 'argentX' }}),
  ];

  return (
    <StarknetConfig chains={chains} connectors={connectors}>
      {children}
    </StarknetConfig>
  );
}