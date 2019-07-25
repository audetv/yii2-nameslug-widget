<?php
/**
 * Created by PhpStorm.
 * User: Гусев
 * Date: 22.07.2019
 * Time: 14:52
 */

namespace audetv\nameslug;


use audetv\nameslug\assets\NameSlugAsset;
use yii\helpers\Html;
use yii\widgets\InputWidget;

class NameSlugWidget extends InputWidget
{
    public $pluginOptions = [];
    public $slugId;

    public $options = ['class' => 'form-group'];

    private $slugAttribute = 'slug';

    /**
     * @throws \yii\base\InvalidConfigException
     */
    public function init()
    {
        parent::init();
        $this->pluginOptions['name-field'] = (!isset($this->options['id'])) ? Html::getInputId($this->model, $this->attribute) : $this->options['id'];

        if (isset($this->pluginOptions['slugAttribute']))
            $this->slugAttribute = $this->pluginOptions['slugAttribute'];

        $this->pluginOptions['slug-field'] = (!isset($this->pluginOptions['slugId'])) ? Html::getInputId($this->model, $this->slugAttribute) : $this->pluginOptions['slugId'];

        NameSlugAsset::register($this->view);

    }

    public function run()
    {

        $this->view->registerJs($this->generateJs());

        return Html::activeTextInput($this->model, $this->attribute, $this->options);
    }

    private function generateJs(): string
    {
        return <<<JS
$(function(){
    $('#{$this->pluginOptions['name-field']}').keyup(function(){
        transliteration('{$this->pluginOptions['name-field']}','{$this->pluginOptions['slug-field']}');
        return false;
    });
});
JS;
    }
}