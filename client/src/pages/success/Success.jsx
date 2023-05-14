import React, { useEffect }from 'react';
import './Success.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import newRequest from '../../utils/newRequest';
import { useTranslation } from 'react-i18next';

function Success() {
  const {t, i18n} = useTranslation();
  const {search} = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await newRequest.put("/orders", {payment_intent});
        setTimeout(() => {
          navigate("/orders");
        },5000);
      } catch (error) {
        console.log(error);
      }
    }
    makeRequest();
  }, []);

  return (
    <div className='successContainer'>
      <div className="successWrapper">
        <h4>{t("successPageDescription")}</h4>
      </div>
    </div>
  )
}

export default Success;