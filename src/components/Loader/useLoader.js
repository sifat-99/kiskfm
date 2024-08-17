'use client';
import React, { useState, useCallback } from 'react';
import Loading from './Loading';

export default function UseLoader() {
  const [loading, setLoading] = useState(false);

  const startLoading = useCallback(() => setLoading(true), []);
  const stopLoading = useCallback(() => setLoading(false), []);

  return [
    loading ? <Loading key="loading" /> : null,
    startLoading,
    stopLoading,
  ];
}
