import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  //Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  Img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'ContactUIset',
    Img: require('@site/static/img/UIsetImg/UIset_sample_img.png').default,
    description: (
      <>
        <p>VRChat用のcontact機能を利用した<br />アニメーション補助ツールです</p>
        <p>Contactを使った物の出し入れや衣装の切り替えを簡単に設定することが出来ます</p>
        <p><a href='https://hako-iri.booth.pm/items/4381102' target='_blank'>商品ページ</a></p>
      </>
    ),
  },
  {
    title: 'ContactSettingSystem',
    Img: "",
    description: (
      <>
        <p>VRChat用のcontact機能を簡易的に設定できる補助ツールです</p>
        <p>エフェクト同梱</p>
        <p>※開発中</p>
      </>
    ),
  },
];

function Feature({ title, Img, description }: FeatureItem) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <img src={Img} className="featureImg" role="img" />
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
