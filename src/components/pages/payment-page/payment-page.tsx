import { Header } from '@/components/shared';
import {
  PaymentForm,
  PaymentSummary,
  RegisterPaymentControl,
} from './components';
import { useEffect, useRef, useState } from 'react';

export const PaymentPage = () => {
  const pageTitle = `Pagar cuenta`;
  const controlRef = useRef<HTMLDivElement | null>(null);
  const [controlHeight, setControlHeight] = useState(0);

  useEffect(() => {
    const element = controlRef.current;
    if (!element) return;

    setControlHeight(element.getBoundingClientRect().height);

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (controlHeight !== entry.contentRect.height) {
          setControlHeight(entry.contentRect.height || 0);
        }
      }
    });
    observer.observe(element);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className='flex flex-col gap-5 p-5'
      style={{
        paddingBottom: controlHeight ? `${controlHeight + 20}px` : undefined,
      }}
    >
      <Header
        title={pageTitle}
        icon='walletMoneyLi'
      />

      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-4'>
          <p className='font-semibold'>1. Precuenta</p>

          <PaymentSummary />
        </div>

        <div className='flex flex-col gap-4'>
          <p className='font-semibold'>2. Elige cómo cancela el cliente</p>

          <PaymentForm />
        </div>
      </div>

      <div
        ref={controlRef}
        className='fixed bottom-register-payment-control-offset left-0 w-full'
      >
        <RegisterPaymentControl />
      </div>
    </div>
  );
};
