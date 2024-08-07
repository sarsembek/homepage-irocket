import { Button } from "@nextui-org/react";

const Main = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:h-screen h-full bg-slate-100 px-4 sm:px-6 lg:px-10 py-10">
      <div className="flex flex-col justify-center lg:mr-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-start">
          Авторассылка для увеличения{" "}
          <span className="text-primary">рейтинга</span> и продаж
        </h1>
        <p className="text-base sm:text-lg mt-4">
          Автоматизированные рассылки, отзывы и рейтинги - ваш путь к успеху!
        </p>
        <a href="https://wa.me/77477174422">
          <Button
            className="mt-6 self-start px-16 sm:px-20 lg:px-24 w-full md:w-fit"
            color="primary"
            variant="shadow"
            size="lg"
          >
            Узнать больше
          </Button>
        </a>
      </div>
      <div className="flex flex-col justify-center space-y-4 mt-10 lg:mt-0">
        <div className="relative max-w-full sm:max-w-md self-start">
          <div className="bg-white p-4 rounded-lg shadow-md relative">
            <p>
              Как ваш продукт может помочь увеличить мой рейтинг и продажи на Kaspi?
            </p>
            <div className="absolute left-4 transform -translate-y-full top-full w-0 h-0 border-t-8 border-t-white border-x-8 border-x-transparent"></div>
          </div>
        </div>
        <div className="relative max-w-full sm:max-w-md self-end">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md relative">
            <p>
              Наш продукт поможет увеличить рейтинг и продажи, отправляя
              сообщения вашим клиентам из Kaspi, уведомляя их о
              покупке и прося оставить отзыв.
            </p>
            <div className="absolute right-4 transform -translate-y-full top-full w-0 h-0 border-t-8 border-t-blue-100 border-x-8 border-x-transparent"></div>
          </div>
        </div>
        <div className="relative max-w-full sm:max-w-md self-start">
          <div className="bg-white p-4 rounded-lg shadow-md relative">
            <p>
              Могу ли я быть уверен, что сообщения не будут выглядеть как автоматические и будут персонализированными?
            </p>
            <div className="absolute left-4 transform -translate-y-full top-full w-0 h-0 border-t-8 border-t-white border-x-8 border-x-transparent"></div>
          </div>
        </div>
        <div className="relative max-w-full sm:max-w-md self-end">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md relative">
            <p>
              Да, вы можете настроить собственные шаблоны сообщений, чтобы они выглядели персонализированными и уникальными для каждого клиента.
            </p>
            <div className="absolute right-4 transform -translate-y-full top-full w-0 h-0 border-t-8 border-t-blue-100 border-x-8 border-x-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
