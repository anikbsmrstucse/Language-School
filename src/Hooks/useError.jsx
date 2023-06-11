import { useLottie } from 'lottie-react';
import { errorPage } from "/public/error_page.json";

const useError = () => {
    const options = {
        animationData: errorPage,
        loop: true
      };
      const {view} = useLottie(options);
    return (
        <div className='h-[400px]'>{view}</div>
    );
};

export default useError;