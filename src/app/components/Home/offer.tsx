import { Card, CardFooter, CardBody } from '@nextui-org/react';
import CardImage1 from '../../home/card1.svg';
import CardImage2 from '../../home/card2.svg';
import CardImage3 from '../../home/card3.svg';
import Image from 'next/image';

export const Offer = () => {
   return (
      <div className="mt-[6em] p-10" id='offer'>
         <h2 className="text-4xl font-semibold text-center">
            Что мы предлагаем?
         </h2>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 pt-10 gap-5">
            <Card className="grid py-4 bg-slate-100">
               <CardBody className="overflow-visible py-2 justify-center items-center">
                  <Image src={CardImage1} alt="Img 1" width={320} className="object-cover rounded-xl max-w-[20em]" />
               </CardBody>
               <CardFooter className="pb-0 pt-2 px-4 flex-col justify-center gap-2">
                  <h4 className="font-bold text-large text-danger text-center">
                     Экономим Ваше время
                  </h4>
                  <p className="text-tiny uppercase font-bold text-center">
                     Все процессы автомитизированы, и не требуют вашего внимания
                  </p>
               </CardFooter>
            </Card>
            <Card className="grid py-4 bg-slate-100">
               <CardBody className="overflow-visible py-2 justify-center items-center">
                  <Image src={CardImage2} alt="Img 2" width={320} className="object-cover rounded-xl max-w-[20em]" />
               </CardBody>
               <CardFooter className="pb-0 pt-2 px-4 flex-col justify-center gap-2">
                  <h4 className="font-bold text-large text-danger text-center">
                     Обойдем конкурентов
                  </h4>
                  <p className="text-tiny uppercase font-bold text-center">
                     Поможем оставить всех ваших конкурентов далеко позади
                  </p>
               </CardFooter>
            </Card>
            <Card className="grid py-4 bg-slate-100 ">
               <CardBody className="overflow-visible py-2 justify-center items-center">
                  <Image src={CardImage3} alt="Img 3" width={320} className="object-cover rounded-xl max-w-[20em]" />               
               </CardBody>
               <CardFooter className="pb-0 pt-2 px-4 flex-col justify-center gap-2">
                  <h4 className="font-bold text-large text-danger text-center">
                     Увеличим продажи
                  </h4>
                  <p className="text-tiny uppercase font-bold text-center">
                     Благодаря iRocket, ваши товары всегда будут на первых
                     позициях!
                  </p>
               </CardFooter>
            </Card>
         </div>
      </div>
   )
}