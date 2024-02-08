import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockAboutinfo extends Schema.Component {
  collectionName: 'components_block_aboutinfos';
  info: {
    displayName: 'aboutinfo';
    description: '';
  };
  attributes: {
    info: Attribute.Text;
  };
}

export interface BlockCertificates extends Schema.Component {
  collectionName: 'components_block_certificates';
  info: {
    displayName: 'certificates';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface BlockFaqs extends Schema.Component {
  collectionName: 'components_block_faqs';
  info: {
    displayName: 'FAQS';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Text;
  };
}

export interface BlockResources extends Schema.Component {
  collectionName: 'components_block_resources';
  info: {
    displayName: 'Resources';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    description: Attribute.Text;
  };
}

export interface BlockServices extends Schema.Component {
  collectionName: 'components_block_services';
  info: {
    displayName: 'Services';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface BlockTestimonials extends Schema.Component {
  collectionName: 'components_block_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    name: Attribute.String;
    text: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.aboutinfo': BlockAboutinfo;
      'block.certificates': BlockCertificates;
      'block.faqs': BlockFaqs;
      'block.resources': BlockResources;
      'block.services': BlockServices;
      'block.testimonials': BlockTestimonials;
    }
  }
}
