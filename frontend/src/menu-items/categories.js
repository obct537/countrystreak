// assets
import { IconBolt, IconSignLeft, IconCar, IconFlag } from '@tabler/icons';

// constant
const icons = {
  IconBolt,
  IconSignLeft,
  IconCar,
  IconFlag
};

// ==============================|| MENU ITEMS ||============================== //

const categories = {
  id: 'categories',
  title: 'Categories',
  type: 'group',
  children: [
    {
      id: 'infrastructure',
      title: 'Infrastructure',
      type: 'collapse',
      icon: icons.IconBolt,
      children: [
        {
          id: 'bollards',
          title: 'Bollards',
          type: 'item',
          url: '/',
          breadcrumbs: false
        },
        {
          id: 'utilitypoles',
          title: 'Utility Poles',
          type: 'item',
          url: '/',
          breadcrumbs: false
        },
        {
          id: 'roadlines',
          title: 'Road Lines',
          type: 'item',
          url: '/',
          breadcrumbs: false
        },
        {
          id: 'postboxes',
          title: 'Post Boxes',
          type: 'item',
          url: '/',
          breadcrumbs: false
        },
        {
          id: 'sidewalks',
          title: 'Sidewalks',
          type: 'item',
          url: '/',
          breadcrumbs: false
        },
        {
          id: 'stoplights',
          title: 'Stoplights',
          type: 'item',
          url: '/',
          breadcrumbs: false
        }                                
      ]
    },
    {
      id: 'signage',
      title: 'signage',
      type: 'collapse',
      url: '/signage',
      icon: icons.IconSignLeft,
      children: [
        {
          id: 'directions',
          title: 'Directions',
          type: 'item',
          url: '/',
          breadcrumbs: false
        },
        {
          id: 'city',
          title: 'City',
          type: 'item',
          url: '/',
          breadcrumbs: false
        },
        {
          id: 'housenumbers',
          title: 'House Numbers',
          type: 'item',
          url: '/',
          breadcrumbs: false
        },
        {
          id: 'mileage',
          title: 'Mileage',
          type: 'item',
          url: '/',
          breadcrumbs: false
        },                        
      ]
    },
    {
      id: 'vehicles',
      title: 'Vehicles',
      type: 'collapse',
      icon: icons.IconCar,
      children: [
        {
          id: 'googlecar',
          title: 'Google Car',
          type: 'item',
          url: '/',
          breadcrumbs: false
        },
        {
          id: 'follow',
          title: 'Follow Car',
          type: 'item',
          url: '/',
          breadcrumbs: false
        },                
      ]
    },
    {
      id: 'meta',
      title: 'Meta',
      type: 'collapse',
      icon: icons.IconFlag,
      children: [
        {
          id: 'cameragen',
          title: 'Camera Gen',
          type: 'item',
          url: '/',
          breadcrumbs: false
        },
        {
          id: 'currency',
          title: 'Currency',
          type: 'item',
          url: '/',
          breadcrumbs: false
        },
        {
          id: 'flags',
          title: 'Flags',
          type: 'item',
          url: '/',
          breadcrumbs: false
        },
        {
          id: 'phonenumbers',
          title: 'Phone Numbers',
          type: 'item',
          url: '/',
          breadcrumbs: false
        },                        
      ]
    }
  ]
};

export default categories;
