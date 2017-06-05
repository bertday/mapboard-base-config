(() => {
  const GATEKEEPER_KEY = '35ae5b7bf8f0ff2613134935ce6b4c1e';

  return {
    geocoder: {
      methods: {
        search: {
          url(input) {
            const inputEncoded = encodeURIComponent(input);
            return `//api.phila.gov/ais/v1/search/${inputEncoded}`
          },
          params: {
            gatekeeperKey: GATEKEEPER_KEY
          }
        },
        reverseGeocode: {
          // TODO uri encode
          url: (input) => `//api.phila.gov/ais/v1/reverse_geocode/${input}`,
          params: {
            gatekeeperKey: GATEKEEPER_KEY
          }
        }
      }
    },
    map: {
      center: [39.953338, -75.163471],
      minZoom: 11,
      maxZoom: 20,
      zoom: 12,
      basemaps: {
        pwd: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer',
          tiledLayers: [
            'cityBasemapLabels'
          ],
          type: 'featuremap'
        },
        dor: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/DORBasemap/MapServer',
          tiledLayers: [
            'dorBasemapLabels'
          ],
          type: 'featuremap'
        },
        imagery2016: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2016_3in/MapServer',
          tiledLayers: [
            'imageryBasemapLabels',
            'parcels'
          ],
          type: 'imagery',
          year: 2016
        },
        imagery2015: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2015_3in/MapServer',
          tiledLayers: [
            'imageryBasemapLabels',
            'parcels'
          ],
          type: 'imagery',
          year: 2015
        },
        imagery2012: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2012_3in/MapServer',
          tiledLayers: [
            'imageryBasemapLabels',
            'parcels'
          ],
          type: 'imagery',
          year: 2012
        },
        imagery2010: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2010_3in/MapServer',
          tiledLayers: [
            'imageryBasemapLabels',
            'parcels'
          ],
          type: 'imagery',
          year: 2010
        },
        imagery2008: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2008_3in/MapServer',
          tiledLayers: [
            'imageryBasemapLabels',
            'parcels'
          ],
          type: 'imagery',
          year: 2008
        },
        imagery2004: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2004_6in/MapServer',
          tiledLayers: [
            'imageryBasemapLabels',
            'parcels'
          ],
          type: 'imagery',
          year: 2004
        },
        imagery1996: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_1996_6in/MapServer',
          tiledLayers: [
            'imageryBasemapLabels',
            'parcels'
          ],
          type: 'imagery',
          year: 1996
        },
        landUse1962: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricLandUse_1962/MapServer',
          tiledLayers: [],
          type: 'historic',
          year: 1962
        },
        landUse1942: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/HistoricLandUse_1942/MapServer',
          tiledLayers: [],
          type: 'historic',
          year: 1942
        },
      },
      tiledLayers: {
        cityBasemapLabels: {
          // type: 'labels',
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer',
          zIndex: '3',
        },
        dorBasemapLabels: {
          // type: 'labels',
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/DORBasemap_Labels_Test2/MapServer',
          zIndex: '3',
        },
        imageryBasemapLabels: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_Labels/MapServer',
          zIndex: '3',
        },
        parcels: {
          url: '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/ParcleTile/MapServer',
          zIndex: '2',
        },
      },
      dynamicMapLayers: {
        stormwater: {
          url: '//gis.phila.gov/arcgis/rest/services/Water/pv_data/MapServer'
        },
        zoning: {
          url: '//gis.phila.gov/arcgis/rest/services/PhilaGov/ZoningMap/MapServer'
        }
      },
      featureLayers: {
        dorParcels: {
          url: '//gis.phila.gov/arcgis/rest/services/DOR_ParcelExplorer/rtt_basemap/MapServer/24'
        },
        pwdParcels: {
          url: '//gis.phila.gov/arcgis/rest/services/Water/pv_data_geodb2/MapServer/0',
        }
      },
      tools: {
        buffer: {
          url: '//192.168.103.143:6080/arcgis/rest/services/Utilities/Geometry/GeometryServer/buffer'
        },
        distance: {
          url: '//192.168.103.143:6080/arcgis/rest/services/Utilities/Geometry/GeometryServer/distance'
        }
      }
    },
    cyclomedia: {
      host: '10.8.101.67',
      username: 'maps@phila.gov',
      // there's no way to initialize the streetsmart api without sending this to the client, so it has to be in here.
      password: 'mapscyc01',
      apiKey: 'GfElS3oRuroNivgtibsZqDkpCvItyPUNuv0NmXglen8puXoJanEVarsZyns9ynkJ',
      // this has to be https
      recordingsUrl: 'https://atlas.cyclomedia.com/Recordings/wfs'
    },
    pictometry: {
      host: '10.8.101.67',
      apiKey: 'FC263F1985BF2DBDADBEB3B5BAA74EAE',
      // again, this is necessary to start the pictometry ipa viewer.
      secretKey: '132968F728EAB2957EB9689A9CC5B4B55BA4347E4E3A43FC782C7B154321EEC109612716E13858136CBE83769FDC64BA17BFC26B831F925816E1BF4AA8B25FD01414550B0CE4BFAC751C57EC81C8F5096D0092AE12F953B90CD6CDC7C2CCFC7A80BF2C41EE5C85578A1075B6DD4571EFF95ADE0FFBC169EA24718AEBC056CB10',
      iframeId: 'pictometry-ipa'
    },
    carto: {
      baseUrl: '//phl.carto.com/api/v2/sql',
    },
  };
})();
