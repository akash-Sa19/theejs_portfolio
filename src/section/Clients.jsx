import { clientReviews } from "../constants";

const Clients = () => {
  return (
    <section className="my-20 c-space">
      <h3 className="head-text">Hear from my Clients</h3>

      <div className="client-container">
        {clientReviews.map(({ id, name, review, img, position }) => (
          <div
            key={id}
            className="client-review"
          >
            <div>
              <p className="font-light text-white">{review}</p>
              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={img}
                    alt="name"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{name}</p>
                    <p className="text-sm text-white-500 md:text-base">
                      {position}
                    </p>
                  </div>
                </div>

                <div className="flex items-center self-end gap-2">
                  {Array.from(
                    Array.from({ length: 5 }).map((_, index) => (
                      <img
                        key={index}
                        className="w-5 h-5"
                        src="/assets/star.png"
                        alt="starts"
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
