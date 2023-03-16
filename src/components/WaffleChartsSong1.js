import React from "react";
import { ResponsiveWaffle } from '@nivo/waffle'

export default function WaffleChartsSong1() {
    const dataSong1 = [
        {"id": 1,
            "label": "spch",
            "value": 4,
            "color": "#0B041B"},
        {"id": 2,
            "label": "other unimportant features",
            "value": 16,
            "color": "#F4F2F6"},
        {"id": 3,
            "label": "acou",
            "value": 2,
            "color": "#9871B7"},
        {"id": 2,
            "label": "other unimportant features",
            "value": 18,
            "color": "#F4F2F6"},
        {"id": 4,
            "label": "val",
            "value": 13,
            "color": "#CDC2D6"},
        {"id": 2,
            "label": "other unimportant features",
            "value": 7,
            "color": "#F4F2F6"},
    ]

    return (
        <ResponsiveWaffle
            data={dataSong1}
            total={60}
            rows={6}
            columns={10}
            padding={2}
            margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
            colors={{ scheme: 'nivo' }}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.3
                    ]
                ]
            }}
            animate={false}
            motionStiffness={90}
            motionDamping={11}
            legends={[
                {
                    anchor: 'top-left',
                    direction: 'column',
                    justify: false,
                    translateX: -100,
                    translateY: 0,
                    itemsSpacing: 4,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    itemTextColor: '#777',
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000',
                                itemBackground: '#f7fafb'
                            }
                        }
                    ]
                }
            ]}
        />
    )

}