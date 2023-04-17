<?php

/**
 * Plugin Name:       jungle页面组合区块
 * Description:       这里有很多小的区域可以组成一个成型的着陆页
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            jungle
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       author-plugin
 *
 * @package           jungle-page
 */
// Register a new block category
require_once('includes/category.php');


function getBlockJsonFiles($dir)
{
	$result = array();
	$files = scandir($dir); // 获取目录中的所有文件和文件夹
	foreach ($files as $file) {
		$filePath = $dir . '/' . $file;
		if ($file != '.' && $file != '..' && is_dir($filePath)) { // 如果是目录则递归获取其中的block.json文件
			$blockJsonFiles = getBlockJsonFiles($filePath);
			if (!empty($blockJsonFiles)) {
				$result = array_merge($result, $blockJsonFiles);
			}
		} else if (is_file($filePath) && $file == 'block.json') { // 如果是block.json文件则添加到结果数组中
			$result[] = $filePath;
		}
	}
	return $result;
}
// Register blocks.
add_action('init', function () {
	// $blocks = glob(str_replace('\\', '/', plugin_dir_path(__FILE__)) . 'build/*/*/*/block.json');
	$blocks = getBlockJsonFiles(str_replace('\\', '/', plugin_dir_path(__FILE__)) . 'build');
	foreach ($blocks as $block) {
		register_block_type_from_metadata(
			$block
		);
	}
});

// 引入插件css和js
//前台引入
function add_jungle_plugins_styleScripts()
{
	//注册css
	wp_enqueue_style('wp-block-jungle', plugin_dir_url(__FILE__) . 'assets/css/wp-block-jungle.css', array(), wp_get_theme()->get('Version'), 'all');
}
add_action('wp_enqueue_scripts', 'add_jungle_plugins_styleScripts');
//后台引入
function add_jungle_plugins_admin_styleScripts()
{

	wp_enqueue_style('wp-block-jungle-admin', plugin_dir_url(__FILE__) . '/assets/css/wp-block-jungle-admin.css', array(), wp_get_theme()->get('Version'), 'all');
}
add_action('admin_enqueue_scripts', 'add_jungle_plugins_styleScripts');
add_action('admin_enqueue_scripts', 'add_jungle_plugins_admin_styleScripts');
