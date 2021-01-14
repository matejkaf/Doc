# Google Cloud Messaging 

Notifications:

```json
{
   "to" : "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1...",
   "data" : {
     "Nick" : "Mario",
     "body" : "great match!",
     "Room" : "PortugalVSDenmark"
   },
 }
```

Here is an example of a normal-priority message to **notify a magazine subscriber** that new content is available to download:

```json
{
  "to" : "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1...",
  "priority" : "normal",
  "notification" : {
    "body" : "This week's edition is now available.",
    "title" : "NewsMagazine.com",
    "icon" : "new",
  },
  "data" : {
    "volume" : "3.21.15",
    "contents" : "http://www.news-magazine.com/world-week/21659772"
  }
}
```


# Apple Push Notification

[Quelle](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html#//apple_ref/doc/uid/TP40008194-CH10-SW1)

```json
{
    "aps" : { "alert" : "Message received from Bob" },
    "acme2" : [ "bang",  "whiz" ]
}
```

- `aps` Apple specific
- `acme2` App Daten

```json
{
    "aps" : {
        "alert" : "You got your emails.",
        "badge" : 9,
        "sound" : "bingbong.aiff"
    },
    "acme1" : "bar",
    "acme2" : 42
}
```

# Twitter

Tweet (gekürzt).
[Quelle](https://dev.twitter.com/docs)

```json
{
      "text": "RT @PostGradProblem: In preparation for the NFL lockout, I will be spending twice as much time analyzing my fantasy baseball team during ...", 
      "truncated": true, 
      "in_reply_to_user_id": null, 
      "in_reply_to_status_id": null, 
      "favorited": false, 
      "source": "<a href=\"http://twitter.com/\" rel=\"nofollow\">Twitter for iPhone</a>", 
      "in_reply_to_screen_name": null, 
      "in_reply_to_status_id_str": null, 
      "id_str": "54691802283900928", 
      "entities": {
            "user_mentions": [
                  {
                        "indices": [
                              3, 
                              19
                        ], 
                        "screen_name": "PostGradProblem", 
                        "id_str": "271572434", 
                        "name": "PostGradProblems", 
                        "id": 271572434
                  }
            ], 
            "urls": [ ], 
            "hashtags": [
                        {
                              "text": "PGP", 
                              "indices": [
                                    130, 
                                    134
                              ]
                        }
                  ]
      }, 
      "contributors": null, 
      "retweeted": false, 
      "in_reply_to_user_id_str": null, 
      "place": null, 
      "retweet_count": 4, 
      "created_at": "Sun Apr 03 23:48:36 +0000 2011", 
      "retweeted_status": {... }, 
      "user": {
            "notifications": null, 
            "profile_use_background_image": true, 
            "statuses_count": 351, 
            "profile_background_color": "C0DEED", 
            "followers_count": 48, 
            "profile_image_url": "http://a1.twimg.com/profile_images/455128973/gCsVUnofNqqyd6tdOGevROvko1_500_normal.jpg", 
            "listed_count": 0, 
            "profile_background_image_url": "http://a3.twimg.com/a/1300479984/images/themes/theme1/bg.png", 
            "description": "watcha doin in my waters?", 
            "screen_name": "OldGREG85", 
            "default_profile": true, 
            "verified": false, 
            "time_zone": "Hawaii", 
            "profile_text_color": "333333", 
            "is_translator": false, 
            "profile_sidebar_fill_color": "DDEEF6", 
            "location": "Texas", 
            "id_str": "80177619", 
            "default_profile_image": false, 
            "profile_background_tile": false, 
            "lang": "en", 
            "friends_count": 81, 
            "protected": false, 
            "favourites_count": 0, 
            "created_at": "Tue Oct 06 01:13:17 +0000 2009", 
            "profile_link_color": "0084B4", 
            "name": "GG", 
            "show_all_inline_media": false, 
            "follow_request_sent": null, 
            "geo_enabled": false, 
            "profile_sidebar_border_color": "C0DEED", 
            "url": null, 
            "id": 80177619, 
            "contributors_enabled": false, 
            "following": null, 
            "utc_offset": -36000
      }, 
      "id": 54691802283900930, 
      "coordinates": null, 
      "geo": null
}
```

# Instagram

Kommentar

Request ([Quelle](https://www.instagram.com/developer/endpoints/comments/)):

```url
https://api.instagram.com/v1/media/{media-id}/comments?access_token=ACCESS-TOKEN
```

```json
{
    "data": [
        {
            "created_time": "1280780324",
            "text": "Really amazing photo!",
            "from": {
                "username": "snoopdogg",
                "profile_picture": "http://images.instagram.com/profiles/profile_16_75sq_1305612434.jpg",
                "id": "1574083",
                "full_name": "Snoop Dogg"
            },
            "id": "420"
        },
        ...
    ]
}
```

# Google Geocode



```url
http://maps.googleapis.com/maps/api/geocode/json?address=5280+Braunau,Osternbergerstr.+55
```

```json
{
   "results" : [
      {
         "address_components" : [
            {
               "long_name" : "55",
               "short_name" : "55",
               "types" : [ "street_number" ]
            },
            {
               "long_name" : "Osternberger Straße",
               "short_name" : "Osternberger Str.",
               "types" : [ "route" ]
            },
            {
               "long_name" : "Braunau am Inn",
               "short_name" : "Braunau am Inn",
               "types" : [ "locality", "political" ]
            },
            {
               "long_name" : "Gemeinde Braunau am Inn",
               "short_name" : "Gemeinde Braunau am Inn",
               "types" : [ "administrative_area_level_3", "political" ]
            },
            {
               "long_name" : "Braunau am Inn",
               "short_name" : "Braunau am Inn",
               "types" : [ "administrative_area_level_2", "political" ]
            },
            {
               "long_name" : "Oberösterreich",
               "short_name" : "Oberösterreich",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "Austria",
               "short_name" : "AT",
               "types" : [ "country", "political" ]
            },
            {
               "long_name" : "5280",
               "short_name" : "5280",
               "types" : [ "postal_code" ]
            }
         ],
         "formatted_address" : "Osternberger Str. 55, 5280 Braunau am Inn, Austria",
         "geometry" : {
            "location" : {
               "lat" : the,
               "lng" : 13.0286317
            },
            "location_type" : "ROOFTOP",
            "viewport" : {
               "northeast" : {
                  "lat" : 48.2450995802915,
                  "lng" : 13.0299806802915
               },
               "southwest" : {
                  "lat" : 48.2424016197085,
                  "lng" : 13.0272827197085
               }
            }
         },
         "partial_match" : true,
         "place_id" : "ChIJd-fOO_I0dEcR-W7FGzW0AuU",
         "types" : [ "street_address" ]
      }
   ],
   "status" : "OK"
}
```


```url
http://maps.googleapis.com/maps/api/geocode/xml?address=HTL+Braunau
```

```xml
<GeocodeResponse>
    <status>OK</status>
    <result>
        <type>bus_station</type>
        <type>transit_station</type>
        <type>point_of_interest</type>
        <type>establishment</type>
        <formatted_address>
            Braunau/Inn HTL (Michaelistraße), 5280 Braunau am Inn, Austria
        </formatted_address>
        <address_component>
            <long_name>Braunau/Inn HTL (Michaelistraße)</long_name>
            <short_name>Braunau/Inn HTL (Michaelistraße)</short_name>
            <type>point_of_interest</type>
            <type>establishment</type>
        </address_component>
        <address_component>
            <long_name>Braunau am Inn</long_name>
            <short_name>Braunau am Inn</short_name>
            <type>locality</type>
            <type>political</type>
        </address_component>
        <address_component>
            <long_name>Braunau am Inn</long_name>
            <short_name>Braunau am Inn</short_name>
            <type>administrative_area_level_2</type>
            <type>political</type>
        </address_component>
        <address_component>
            <long_name>Oberösterreich</long_name>
            <short_name>Oberösterreich</short_name>
            <type>administrative_area_level_1</type>
            <type>political</type>
        </address_component>
        <address_component>
            <long_name>Austria</long_name>
            <short_name>AT</short_name>
            <type>country</type>
            <type>political</type>
        </address_component>
        <address_component>
            <long_name>5280</long_name>
            <short_name>5280</short_name>
            <type>postal_code</type>
        </address_component>
        <geometry>
            <location>
                <lat>48.2427720</lat>
                <lng>13.0287190</lng>
            </location>
            <location_type>APPROXIMATE</location_type>
            <viewport>
                <southwest>
                    <lat>48.2414230</lat>
                    <lng>13.0273700</lng>
                </southwest>
                <northeast>
                    <lat>48.2441210</lat>
                    <lng>13.0300680</lng>
                </northeast>
            </viewport>
        </geometry>
        <partial_match>true</partial_match>
        <place_id>ChIJSWcjTvI0dEcRU9Hr_Ym3fCs</place_id>
    </result>
</GeocodeResponse>
```

Reverse Geocoding

```url
https://maps.googleapis.com/maps/api/geocode/json?latlng=48.2437506,13.0286317
```

```json
{
   "results" : [
      {
         "address_components" : [
            {
               "long_name" : "55",
               "short_name" : "55",
               "types" : [ "street_number" ]
            },
            {
               "long_name" : "Osternberger Straße",
               "short_name" : "Osternberger Str.",
               "types" : [ "route" ]
            },
            {
               "long_name" : "Osternberg",
               "short_name" : "Osternberg",
               "types" : [ "locality", "political" ]
            },
            {
               "long_name" : "Gemeinde Braunau am Inn",
               "short_name" : "Gemeinde Braunau am Inn",
               "types" : [ "administrative_area_level_3", "political" ]
            },
            {
               "long_name" : "Braunau am Inn",
               "short_name" : "Braunau am Inn",
               "types" : [ "administrative_area_level_2", "political" ]
            },
            {
               "long_name" : "Oberösterreich",
               "short_name" : "Oberösterreich",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "Austria",
               "short_name" : "AT",
               "types" : [ "country", "political" ]
            },
            {
               "long_name" : "5280",
               "short_name" : "5280",
               "types" : [ "postal_code" ]
            }
         ],
         "formatted_address" : "Osternberger Str. 55, 5280 Osternberg, Austria",
         "geometry" : {
            "location" : {
               "lat" : 48.2437506,
               "lng" : 13.0286317
            },
            "location_type" : "ROOFTOP",
            "viewport" : {
               "northeast" : {
                  "lat" : 48.2450995802915,
                  "lng" : 13.0299806802915
               },
               "southwest" : {
                  "lat" : 48.2424016197085,
                  "lng" : 13.0272827197085
               }
            }
         },
         "place_id" : "ChIJd-fOO_I0dEcR-W7FGzW0AuU",
         "types" : [ "street_address" ]
      },
      {
         "address_components" : [
            {
               "long_name" : "Braunau am Inn",
               "short_name" : "Braunau am Inn",
               "types" : [ "locality", "political" ]
            },
            {
               "long_name" : "Gemeinde Braunau am Inn",
               "short_name" : "Gemeinde Braunau am Inn",
               "types" : [ "administrative_area_level_3", "political" ]
            },
            {
               "long_name" : "Braunau am Inn District",
               "short_name" : "Braunau am Inn District",
               "types" : [ "administrative_area_level_2", "political" ]
            },
            {
               "long_name" : "Upper Austria",
               "short_name" : "Upper Austria",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "Austria",
               "short_name" : "AT",
               "types" : [ "country", "political" ]
            }
         ],
         "formatted_address" : "Braunau am Inn, Austria",
         "geometry" : {
            "bounds" : {
               "northeast" : {
                  "lat" : 48.2757099,
                  "lng" : 13.07816
               },
               "southwest" : {
                  "lat" : 48.20005,
                  "lng" : 12.9527799
               }
            },
            "location" : {
               "lat" : 48.25573,
               "lng" : 13.04432
            },
            "location_type" : "APPROXIMATE",
            "viewport" : {
               "northeast" : {
                  "lat" : 48.2757099,
                  "lng" : 13.07816
               },
               "southwest" : {
                  "lat" : 48.20005,
                  "lng" : 12.9527799
               }
            }
         },
         "place_id" : "ChIJV8BLcJo0dEcRy068PGcOTik",
         "types" : [ "locality", "political" ]
      },
      {
         "address_components" : [
            {
               "long_name" : "5280",
               "short_name" : "5280",
               "types" : [ "postal_code" ]
            },
            {
               "long_name" : "Braunau am Inn",
               "short_name" : "Braunau am Inn",
               "types" : [ "locality", "political" ]
            },
            {
               "long_name" : "Gemeinde Braunau am Inn",
               "short_name" : "Gemeinde Braunau am Inn",
               "types" : [ "administrative_area_level_3", "political" ]
            },
            {
               "long_name" : "Braunau am Inn District",
               "short_name" : "Braunau am Inn District",
               "types" : [ "administrative_area_level_2", "political" ]
            },
            {
               "long_name" : "Upper Austria",
               "short_name" : "Upper Austria",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "Austria",
               "short_name" : "AT",
               "types" : [ "country", "political" ]
            }
         ],
         "formatted_address" : "5280 Braunau am Inn, Austria",
         "geometry" : {
            "bounds" : {
               "northeast" : {
                  "lat" : 48.2714051,
                  "lng" : 13.0786184
               },
               "southwest" : {
                  "lat" : 48.2179773,
                  "lng" : 13.0142932
               }
            },
            "location" : {
               "lat" : 48.2426263,
               "lng" : 13.0461814
            },
            "location_type" : "APPROXIMATE",
            "viewport" : {
               "northeast" : {
                  "lat" : 48.2714051,
                  "lng" : 13.0786184
               },
               "southwest" : {
                  "lat" : 48.2179773,
                  "lng" : 13.0142932
               }
            }
         },
         "place_id" : "ChIJL_lPelk0dEcRLoYswRH__js",
         "types" : [ "postal_code" ]
      },
      {
         "address_components" : [
            {
               "long_name" : "Braunau am Inn",
               "short_name" : "Braunau am Inn",
               "types" : [ "postal_town" ]
            },
            {
               "long_name" : "Braunau am Inn",
               "short_name" : "Braunau am Inn",
               "types" : [ "locality", "political" ]
            },
            {
               "long_name" : "Gemeinde Braunau am Inn",
               "short_name" : "Gemeinde Braunau am Inn",
               "types" : [ "administrative_area_level_3", "political" ]
            },
            {
               "long_name" : "Braunau am Inn",
               "short_name" : "Braunau am Inn",
               "types" : [ "administrative_area_level_2", "political" ]
            },
            {
               "long_name" : "Oberösterreich",
               "short_name" : "Oberösterreich",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "Austria",
               "short_name" : "AT",
               "types" : [ "country", "political" ]
            },
            {
               "long_name" : "5280",
               "short_name" : "5280",
               "types" : [ "postal_code" ]
            }
         ],
         "formatted_address" : "Braunau am Inn, 5280 Braunau am Inn, Austria",
         "geometry" : {
            "bounds" : {
               "northeast" : {
                  "lat" : 48.2714051,
                  "lng" : 13.0786184
               },
               "southwest" : {
                  "lat" : 48.2179773,
                  "lng" : 13.0142932
               }
            },
            "location" : {
               "lat" : 48.2426263,
               "lng" : 13.0461814
            },
            "location_type" : "APPROXIMATE",
            "viewport" : {
               "northeast" : {
                  "lat" : 48.2714051,
                  "lng" : 13.0786184
               },
               "southwest" : {
                  "lat" : 48.2179773,
                  "lng" : 13.0142932
               }
            }
         },
         "place_id" : "ChIJL_lPelk0dEcRNk8wRhUfjSk",
         "types" : [ "postal_town" ]
      },
      {
         "address_components" : [
            {
               "long_name" : "Gemeinde Braunau am Inn",
               "short_name" : "Gemeinde Braunau am Inn",
               "types" : [ "administrative_area_level_3", "political" ]
            },
            {
               "long_name" : "Braunau am Inn",
               "short_name" : "Braunau am Inn",
               "types" : [ "administrative_area_level_2", "political" ]
            },
            {
               "long_name" : "Oberösterreich",
               "short_name" : "Oberösterreich",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "Austria",
               "short_name" : "AT",
               "types" : [ "country", "political" ]
            }
         ],
         "formatted_address" : "Gemeinde Braunau am Inn, Austria",
         "geometry" : {
            "bounds" : {
               "northeast" : {
                  "lat" : 48.2759715,
                  "lng" : 13.07816
               },
               "southwest" : {
                  "lat" : 48.20005,
                  "lng" : 12.9527799
               }
            },
            "location" : {
               "lat" : 48.25573,
               "lng" : 13.04432
            },
            "location_type" : "APPROXIMATE",
            "viewport" : {
               "northeast" : {
                  "lat" : 48.2759715,
                  "lng" : 13.07816
               },
               "southwest" : {
                  "lat" : 48.20005,
                  "lng" : 12.9527799
               }
            }
         },
         "place_id" : "ChIJV8BLcJo0dEcRv4uugcu7fek",
         "types" : [ "administrative_area_level_3", "political" ]
      },
      {
         "address_components" : [
            {
               "long_name" : "Braunau am Inn District",
               "short_name" : "Braunau am Inn District",
               "types" : [ "administrative_area_level_2", "political" ]
            },
            {
               "long_name" : "Upper Austria",
               "short_name" : "Upper Austria",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "Austria",
               "short_name" : "AT",
               "types" : [ "country", "political" ]
            }
         ],
         "formatted_address" : "Braunau am Inn District, Austria",
         "geometry" : {
            "bounds" : {
               "northeast" : {
                  "lat" : 48.29557,
                  "lng" : 13.3599501
               },
               "southwest" : {
                  "lat" : 47.96972,
                  "lng" : 12.74895
               }
            },
            "location" : {
               "lat" : 48.25573,
               "lng" : 13.04432
            },
            "location_type" : "APPROXIMATE",
            "viewport" : {
               "northeast" : {
                  "lat" : 48.29557,
                  "lng" : 13.3599501
               },
               "southwest" : {
                  "lat" : 47.96972,
                  "lng" : 12.74895
               }
            }
         },
         "place_id" : "ChIJl6p7IQMudEcRPW28btWzlIw",
         "types" : [ "administrative_area_level_2", "political" ]
      },
      {
         "address_components" : [
            {
               "long_name" : "Upper Austria",
               "short_name" : "Upper Austria",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "Austria",
               "short_name" : "AT",
               "types" : [ "country", "political" ]
            }
         ],
         "formatted_address" : "Upper Austria, Austria",
         "geometry" : {
            "bounds" : {
               "northeast" : {
                  "lat" : 48.7726901,
                  "lng" : 14.99129
               },
               "southwest" : {
                  "lat" : 47.46098,
                  "lng" : 12.74895
               }
            },
            "location" : {
               "lat" : 48.025854,
               "lng" : 13.9723665
            },
            "location_type" : "APPROXIMATE",
            "viewport" : {
               "northeast" : {
                  "lat" : 48.7726901,
                  "lng" : 14.99129
               },
               "southwest" : {
                  "lat" : 47.46098,
                  "lng" : 12.74895
               }
            }
         },
         "place_id" : "ChIJYQObWYWXc0cRiJXDA3yBSHw",
         "types" : [ "administrative_area_level_1", "political" ]
      },
      {
         "address_components" : [
            {
               "long_name" : "Austria",
               "short_name" : "AT",
               "types" : [ "country", "political" ]
            }
         ],
         "formatted_address" : "Austria",
         "geometry" : {
            "bounds" : {
               "northeast" : {
                  "lat" : 49.0206081,
                  "lng" : 17.1606861
               },
               "southwest" : {
                  "lat" : 46.37233579999999,
                  "lng" : 9.530783399999999
               }
            },
            "location" : {
               "lat" : 47.516231,
               "lng" : 14.550072
            },
            "location_type" : "APPROXIMATE",
            "viewport" : {
               "northeast" : {
                  "lat" : 49.0206081,
                  "lng" : 17.1606861
               },
               "southwest" : {
                  "lat" : 46.37233579999999,
                  "lng" : 9.530783399999999
               }
            }
         },
         "place_id" : "ChIJfyqdJZsHbUcRr8Hk3XvUEhA",
         "types" : [ "country", "political" ]
      }
   ],
   "status" : "OK"
}
```

# Yahoo Wetter

[Yahoo Weather](https://developer.yahoo.com/weather/)

Definiert eine besondere Syntax für die Abfrage
```
select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="braunau, AT")
```

```url
https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22braunau%2C%20AT%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
```

```json
{
 "query": {
  "count": 1,
  "created": "2015-12-25T16:59:20Z",
  "lang": "en-US",
  "results": {
   "channel": {
    "title": "Yahoo! Weather - Braunau, AT",
    "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Braunau__AT/*http://weather.yahoo.com/forecast/AUXX0080_f.html",
    "description": "Yahoo! Weather for Braunau, AT",
    "language": "en-us",
    "lastBuildDate": "Fri, 25 Dec 2015 5:00 pm CET",
    "ttl": "60",
    "location": {
     "city": "Braunau",
     "country": "Austria",
     "region": "OO"
    },
    "units": {
     "distance": "mi",
     "pressure": "in",
     "speed": "mph",
     "temperature": "F"
    },
    "wind": {
     "chill": "43",
     "direction": "60",
     "speed": "2"
    },
    "atmosphere": {
     "humidity": "87",
     "pressure": "29.04",
     "rising": "1",
     "visibility": ""
    },
    "astronomy": {
     "sunrise": "7:58 am",
     "sunset": "4:20 pm"
    },
    "image": {
     "title": "Yahoo! Weather",
     "width": "142",
     "height": "18",
     "link": "http://weather.yahoo.com",
     "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
    },
    "item": {
     "title": "Conditions for Braunau, AT at 5:00 pm CET",
     "lat": "48.26",
     "long": "13.03",
     "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Braunau__AT/*http://weather.yahoo.com/forecast/AUXX0080_f.html",
     "pubDate": "Fri, 25 Dec 2015 5:00 pm CET",
     "condition": {
      "code": "29",
      "date": "Fri, 25 Dec 2015 5:00 pm CET",
      "temp": "43",
      "text": "Partly Cloudy"
     },
     "description": "\n<img src=\"http://l.yimg.com/a/i/us/we/52/29.gif\"/><br />\n<b>Current Conditions:</b><br />\nPartly Cloudy, 43 F<BR />\n<BR /><b>Forecast:</b><BR />\nTue - Fog Early/Clearing Late. High: 48 Low: 38<br />\nWed - Mostly Sunny. High: 50 Low: 42<br />\nThu - Sunny. High: 49 Low: 39<br />\nFri - Partly Cloudy. High: 48 Low: 40<br />\nSat - Partly Cloudy. High: 49 Low: 39<br />\n<br />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Braunau__AT/*http://weather.yahoo.com/forecast/AUXX0080_f.html\">Full Forecast at Yahoo! Weather</a><BR/><BR/>\n(provided by <a href=\"http://www.weather.com\" >The Weather Channel</a>)<br/>\n",
     "forecast": [
      {
       "code": "20",
       "date": "22 Dec 2015",
       "day": "Tue",
       "high": "48",
       "low": "38",
       "text": "Fog Early/Clearing Late"
      },
      {
       "code": "34",
       "date": "23 Dec 2015",
       "day": "Wed",
       "high": "50",
       "low": "42",
       "text": "Mostly Sunny"
      },
      {
       "code": "32",
       "date": "24 Dec 2015",
       "day": "Thu",
       "high": "49",
       "low": "39",
       "text": "Sunny"
      },
      {
       "code": "30",
       "date": "25 Dec 2015",
       "day": "Fri",
       "high": "48",
       "low": "40",
       "text": "Partly Cloudy"
      },
      {
       "code": "30",
       "date": "26 Dec 2015",
       "day": "Sat",
       "high": "49",
       "low": "39",
       "text": "Partly Cloudy"
      }
     ],
     "guid": {
      "isPermaLink": "false",
      "content": "AUXX0080_2015_12_26_7_00_CET"
     }
    }
   }
  }
 }
 }
 ```

