<?php
/**
 * Created by PhpStorm.
 * User: Гусев
 * Date: 25.07.2019
 * Time: 11:02
 */

namespace audetv\nameslug\assets;


use yii\web\AssetBundle;
use yii\web\YiiAsset;

class NameSlugAsset extends AssetBundle
{
    public $sourcePath = '@vendor/audetv/yii2-nameslug-widget/src/assets';
    public $js = [
        'js/name-slug.js'
    ];

    public $depends = [
        YiiAsset::class,
    ];
}