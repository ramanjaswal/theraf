import { Component } from '@angular/core';

import { List as VendorList } from '../vendors/list/list';
import { List as CelebList } from '../celebrities/list/list';
import { Home } from '../home/home';
import { Categories } from '../categories/categories';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabHome = Home;
  tabCelebs = CelebList;
  tabVendors = VendorList;
  tabCategories = Categories;

  constructor() {

  }
}