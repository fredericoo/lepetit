import { default as NextLink } from 'next/link';
import { Link } from '@chakra-ui/react';

const Logo = (): JSX.Element => (
  <NextLink href="/">
    <Link _hover={{ color: 'orange' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 34.462">
        <path
          d="M385.783,108.319c0-.828,1.937-2.7,2.83-5.727a57.928,57.928,0,0,1-2.283-12.874c0-4.013.625-8.61,3.292-8.606s3.275,4.6,3.27,8.615a47.69,47.69,0,0,1-2.317,12.868c.456,2.574,1.74,5.028,2.539,5.029.521,0,1.289-.857,1.81-1.9a14.181,14.181,0,0,1-1.524-5.856c0-2.3.68-4.718,2.7-4.715s2.635,2.423,2.632,4.722a13.256,13.256,0,0,1-1.6,5.851,7.448,7.448,0,0,0,1.408,1.871,1.115,1.115,0,0,1,.4.8.778.778,0,0,1-.768.765c-.8,0-1.745-1.75-2.083-2.27-.675.949-1.842,2.265-2.976,2.264-1.6,0-2.91-2.026-3.522-4.479a23.6,23.6,0,0,1-2.4,4.2.918.918,0,0,1-.677.3.761.761,0,0,1-.735-.856m10.309-3.97a10.526,10.526,0,0,0,.988-4.6c0-1.592-.3-3.064-.977-3.065s-1.045,1.471-1.047,3.062a10.017,10.017,0,0,0,1.036,4.6M389.62,82.768c-1.044,0-1.57,4.228-1.573,6.464A49.462,49.462,0,0,0,389.6,99.988a48.933,48.933,0,0,0,1.577-10.752c0-2.237-.513-6.467-1.555-6.468M427.483,91a1.318,1.318,0,1,1-2.636,0,1.318,1.318,0,0,1,2.636,0m-4.257,3.638-5.857-.008a.831.831,0,0,1-.827-.858.819.819,0,0,1,.829-.8l5.858.008a.821.821,0,0,1,.827.8.833.833,0,0,1-.83.856m18.745-12.71-.042,31.886a.636.636,0,0,0,.635.636l23.539.031a.635.635,0,0,0,.637-.634l.042-31.886a.636.636,0,0,0-.635-.635l-23.539-.031a.636.636,0,0,0-.637.633m17.706,14.325a2.8,2.8,0,1,1-2.794,2.784,2.82,2.82,0,0,1,2.794-2.784m-10.671-.014a2.8,2.8,0,1,1-2.8,2.784,2.8,2.8,0,0,1,2.8-2.784m2.5,12.443-5.029-.007a1.483,1.483,0,0,1-1.468-2.239s1.662-3.584,3.992-3.581c2.3,0,3.982,3.591,3.982,3.591a1.484,1.484,0,0,1-1.477,2.235m10.673.014-5.027-.006a1.476,1.476,0,0,1-1.47-2.239s1.691-3.585,3.99-3.581c2.332,0,3.984,3.592,3.984,3.592a1.476,1.476,0,0,1-1.476,2.235M414,104.372a10.521,10.521,0,0,0,1.018-4.6c0-1.592-.3-3.065-.978-3.066S413,98.182,413,99.774a10.007,10.007,0,0,0,1.006,4.6M403.09,101.08l-.023-5.179c0-.522.246-.8.7-.8a1.078,1.078,0,0,1,.919,1.1v1.071c.338-1.04,1.291-2.11,2.242-2.109,2.36,0,3.092,2.853,3.088,5.763,0,2.055-.711,5.3-2.553,6.832a3.11,3.11,0,0,1-2.762.792c-.067,3.434-.008,5.947-.009,6.221a.905.905,0,0,1-.919.8.7.7,0,0,1-.706-.83Zm5.367.159c0-1.961-.271-4.259-1.528-4.261-1.626,0-2.243,2.54-2.245,4.256,0,.8.027,2.942.023,5.914a2.064,2.064,0,0,0,1.933-.733c1.413-1.224,1.816-3.736,1.817-5.176m21.332-6.594a.785.785,0,0,1-.766-.859.767.767,0,0,1,.769-.8l5.857.008a.82.82,0,0,1,.828.8.832.832,0,0,1-.83.856Zm6.229,13.8a.733.733,0,0,1-.8.765c-1.136,0-2.727-3.253-2.94-4.171-.463,1.9-1.569,4.165-3.164,4.163-1.841,0-2.666-2.853-3-4.233-.431,1.747-1.232,4.228-3.072,4.225-1.533,0-2.512-1.412-3-4.171-.832,2.757-2.121,4.164-3.379,4.163-1.227,0-2.083-1.014-2.757-2.209a4.188,4.188,0,0,1-3.437,2.2c-.644,0-1.074-.276-1.074-.767a.735.735,0,0,1,.8-.7c.828.093,1.9-.365,2.7-1.956a14.147,14.147,0,0,1-1.556-5.856c0-2.3.681-4.717,2.705-4.715s2.633,2.423,2.63,4.722a14.227,14.227,0,0,1-1.663,6.064c.275.8.947,1.748,1.622,1.749.982,0,2.489-3.612,2.494-7.076,0-1.745-.148-4.839-.112-8.4.035-2.879.191-5.321.191-5.506a.859.859,0,0,1,1.717,0c0,.46.149,2.69.146,5.569.025,3.555-.162,6.588-.164,8.365,0,2.6.972,7.049,2.076,7.05,1.226,0,2.244-4.44,2.248-7.045,0-1.043.066-3.524.068-4.505a.8.8,0,0,1,.828-.795.808.808,0,0,1,.859.8c0,.981.026,3.495.024,4.506,0,2.6,1.124,7.049,2.168,7.051s2.243-4.441,2.246-7.045c0-1.777-.177-4.81-.141-8.365,0-2.879.159-5.109.159-5.568a.86.86,0,0,1,1.719,0c0,.185.149,2.627.177,5.507.026,3.557-.13,6.651-.133,8.4a12.788,12.788,0,0,0,.944,4.63c.642,1.625,1.868,2.638,1.867,3.158"
          transform="translate(-385.783 -81.112)"
          fill="currentColor"
        />
      </svg>
    </Link>
  </NextLink>
);

export default Logo;