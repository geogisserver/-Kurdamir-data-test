var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_dataAZE_adm2shp_3 = new ol.format.GeoJSON();
var features_dataAZE_adm2shp_3 = format_dataAZE_adm2shp_3.readFeatures(json_dataAZE_adm2shp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dataAZE_adm2shp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dataAZE_adm2shp_3.addFeatures(features_dataAZE_adm2shp_3);
var lyr_dataAZE_adm2shp_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dataAZE_adm2shp_3, 
                style: style_dataAZE_adm2shp_3,
                interactive: true,
    title: 'data — AZE_adm2.shp<br />\
    <img src="styles/legend/dataAZE_adm2shp_3_0.png" /> Kürdəmir<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_dataAZE_adm2shp_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleMaps_1,lyr_GoogleSatellite_2,lyr_dataAZE_adm2shp_3];
lyr_dataAZE_adm2shp_3.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'HASC_2': 'HASC_2', 'CCN_2': 'CCN_2', 'CCA_2': 'CCA_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_dataAZE_adm2shp_3.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'HASC_2': 'TextEdit', 'CCN_2': 'TextEdit', 'CCA_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_dataAZE_adm2shp_3.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'HASC_2': 'no label', 'CCN_2': 'no label', 'CCA_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_dataAZE_adm2shp_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});