import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'component.link', false>;
  };
}

export interface LayoutFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_footer_sections';
  info: {
    displayName: 'Footer Section';
    description: '';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
    logoComp: Schema.Attribute.Component<'component.logo', false>;
    iconComp: Schema.Attribute.Component<'component.icon', true>;
  };
}

export interface LayoutFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_features_sections';
  info: {
    displayName: 'Features Section';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    feature: Schema.Attribute.Component<'component.features', true>;
  };
}

export interface ComponentLogo extends Struct.ComponentSchema {
  collectionName: 'components_component_logos';
  info: {
    displayName: 'logo';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ComponentLink extends Struct.ComponentSchema {
  collectionName: 'components_component_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Schema.Attribute.String;
    text: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ComponentIcon extends Struct.ComponentSchema {
  collectionName: 'components_component_icons';
  info: {
    displayName: 'icon';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ComponentHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_component_hero_sections';
  info: {
    displayName: 'Hero-section';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    Link: Schema.Attribute.Component<'component.link', false>;
  };
}

export interface ComponentFeatures extends Struct.ComponentSchema {
  collectionName: 'components_component_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<['Save Time', 'Cloud', 'Accurate']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'layout.hero-section': LayoutHeroSection;
      'layout.footer-section': LayoutFooterSection;
      'layout.features-section': LayoutFeaturesSection;
      'component.logo': ComponentLogo;
      'component.link': ComponentLink;
      'component.icon': ComponentIcon;
      'component.hero-section': ComponentHeroSection;
      'component.features': ComponentFeatures;
    }
  }
}
