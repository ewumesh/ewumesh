import { trigger, sequence, state, animate, transition, style, query, stagger } from '@angular/animations';

export const rowsAnimation = 
    trigger('rowsAnimation', [
      transition('void => *', [
        style({ height: '*', opacity: '0', transform: 'translateX(-550px)', 'box-shadow': 'none' }),
        sequence([
          animate(".5s ease", style({ height: '*', opacity: '.2', transform: 'translateX(0)', 'box-shadow': 'none'  })),
          animate(".5s ease", style({ height: '*', opacity: 1, transform: 'translateX(0)' }))
        ])
      ])
    ]);

export const flyInOut = 
  trigger('flyInOut', [
    state('in', style({opacity: 1, transform: 'translateX(0)'})),
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('.5s 1s ease-in')
    ]),
    transition('* => void', [
      animate('0.2s 0.1s ease-out', style({
        opacity: 0,
        transform: 'translateX(100%)'
      }))
    ])
  ]);

export const listAnimation = 
trigger('listAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateX(-30px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])

    export const collectionInOut = trigger('collectionInOut', [
      transition('* <=> *', [
          query(':leave', [
              stagger('10ms', [
                  animate('0.1s cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: 0, transform: 'translate(0, 20px)' }))
              ]),
  
          ], { optional: true }),
          query(':enter', [
              style({ opacity: 0, transform: 'translate(0, 20px)' }),
              stagger('50ms', [
                  animate('0.4s cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: 1, transform: 'translate(0, 0)' })),
              ])
          ], { optional: true, limit: 50 }),
      ])
  ]);

  export const fadeInOutStagger = trigger('fadeInOutStagger', [
    transition('* <=> *', [
        query(':leave', [
            stagger('100ms', [
                animate('0.1s cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: 0, height: '0' }))
            ]),

        ], { optional: true, }),
        query(':enter', [
            style({ opacity: 0, transform: 'translate(0, -10px)' }),
            stagger('100ms', [
                animate('0.2s cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: 1, transform: 'translate(0, 0)', height: '*' })),
            ])
        ], { optional: true }),
    ])
]);

transition('* <=> *', [
  query(':leave', [
      stagger('100ms', [
          animate('0.2s cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: 0, height: '0', transform: 'translate(0, 10px)' }))
      ]),

  ], { optional: true }),
  query(':enter', [
      style({ opacity: 0, transform: 'translate(0, -10px)' }),
      stagger('200ms', [
          animate('0.3s cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: 1, transform: 'translate(0, 0)', height: '*' })),
      ])
  ], { optional: true }),
])