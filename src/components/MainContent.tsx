import Image from "./Image";
import ContentImage from "./ImageContent";
import HelpFeel from "./HelpFeel";
import Image2 from "./apa.webp";
import Background from "./calm.webp";
import Vip from "./Vip";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import CardCarousel from "./CardCarousel";

interface CardReview {
  review: string;
  reviewer: string;
}

const cardReviewData: CardReview[] = [
  {
    review:
      "When I cannot fall asleep, I turn on this app and am out within 5 minutes.",
    reviewer: "Brandy from Houston",
  },
  {
    review:
      "I have a very busy brain and can find it hard to unwind. Now a daily practice is actually so wonderful and healing for me.",
    reviewer: "John from Chicago",
  },
  {
    review:
      "Calm has changed my life in immeasurable ways. I am more resilient and feel so much more connected to myself.",
    reviewer: "Allison from San Jose",
  },
  {
    review:
      "Whenever I need to unwind from a stressful work day I meditate with Calm's soundscapes and it automatically sends me to my happy place.",
    reviewer: "Jasmine from Bend",
  },
  {
    review:
      "My family loves Calm! Out of the three meditation apps I have on my phone, Calm is the one I actually use.",
    reviewer: "joko widodo from solo",
  },
  {
    review:
      "Calm cuts through my stress, anxiety, irregular sleep schedule and brings me to deep sleep. I usually fall asleep within 5 minutes.",
    reviewer: "Mathieu from New Orleans",
  },
  {
    review:
      "I have tried other meditation and gratitude apps, but this one has everything and the best teachers.",
    reviewer: "Jen from Scarsdale",
  },
  {
    review:
      "My wife and I have listened to Calm for well over 2 years. Cannot express how easy it is to fall asleep listening to this app.",
    reviewer: "Aaron from Louisville",
  },
  {
    review:
      "Medication isn't for me, so I decided to give Calm a try. Now I begin and end every day with guided meditations.",
    reviewer: "Tracy from Newark",
  },
];

export default function MainContent() {
  console.log(cardReviewData);
  return (
    <div className="container-Main">
      <div>
        <Image className="img" src={Background} />
      </div>
      <ContentImage />
      <HelpFeel />
      <Image className="image2" src={Image2} />
      <div className="container-review">
        <h2 className="review-h2">Over 2 million 5-star reviews.</h2>
        <Carousel slideVisible={4}>
          {cardReviewData.map((data, index) => (
            <CarouselItem key={index} index={index} align="end">
              <CardCarousel review={data.review} reviewer={data.reviewer} />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
      <Vip />
    </div>
  );
}
