import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Build Custom Chatbots',
    Svg: require('@site/static/img/chatbot_on_website.svg').default,
    description: (
      <>
        Onyx Chat allows quick, streamlined development of custom chatbots for
        any website.
      </>
    ),
  },
  {
    title: 'Powered by ChatGPT',
    Svg: require('@site/static/img/artificial_intelligence.svg').default,
    description: (
      <>
        Onyx Chat utilizes powerful AI technologies such as OpenAI's ChatGPT to
        provide a seamless chatbot experience, and natural conversations.
      </>
    ),
  },
  {
    title: 'Under your Control',
    Svg: require('@site/static/img/control_panel.svg').default,
    description: (
      <>
        By utilizing Onyx Chat, you can ensure that your data is kept private,
        and that your chatbot is under your control.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
