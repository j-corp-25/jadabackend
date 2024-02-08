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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.aboutinfo': BlockAboutinfo;
      'block.certificates': BlockCertificates;
    }
  }
}
