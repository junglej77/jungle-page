<?php
// Register a new block category
function myplugin_block_category($categories, $post)
{
    return array_merge(
        array(
            array(
                'slug' => 'wellerpcb',
                'title' => 'wellerpcb编辑块',
                'icon' => 'wordpress'
            ),
        ),
        $categories
    );
}
add_filter('block_categories', 'myplugin_block_category', 10, 2);
