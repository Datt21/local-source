import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
  active: boolean;
  roles?: string[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'SA',
    title: 'メンテナンス',
    type: 'group',
    icon: 'feather icon-align-left',

    children: [
      {
        id: 'SA01',
        title: '部門・担当者',
        type: 'collapse',
        icon: 'feather icon-users',
        roles: [],
        children: [
          {
            id: 'SA0103',
            title: '貸与資産積算',
            type: 'item',
            url: '/admin/setting-account',
          }
        ]
      },
      {
        id: 'SA02',
        title: '部門・担当者',
        type: 'collapse',
        icon: 'far fa-address-book',
        roles: [],
        children: [
          {
            id: 'SA0201',
            title: '取引先設定',
            type: 'item',
            url: '/admin/customer',
          },
          {
            id: 'SA0202',
            title: '納入先紐付設定',
            type: 'item',
            url: '/admin/setting-payment',
          },
        ]
      },
      {
        id: 'SA03',
        title: '倉庫・商品',
        type: 'collapse',
        icon: 'fas fa-boxes',
        roles: [],
        children: [
          {
            id: 'SA0301',
            title: '商品設定',
            type: 'item',
            url: '/admin/setting-product',
          },
          {
            id: 'SA0302',
            title: '倉庫別商品設定',
            type: 'item',
            url: '/admin/setting-product-by-warehouse',
          },
          {
            id: 'SA0303',
            title: '倉庫設定',
            type: 'item',
            url: '/admin/setting-warehouse',
          },
        ]
      },
    ]
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
