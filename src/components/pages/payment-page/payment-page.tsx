import { Header } from '@/components/shared';
import { PaymentForm, PaymentSummary } from './components';

export const PaymentPage = () => {
  const pageTitle = `Pagar cuenta`;

  return (
    <div className='flex flex-col gap-5 p-5'>
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
    </div>
  );
};
