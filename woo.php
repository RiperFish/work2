<?php get_header() ?>
<main>
    <section class="products">
        <div class="container">
            <h1 class="section_title">All products</h1>
            <div class="products__wrapper">
                <?php
                global $paged;
                $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
                $cat = get_query_var('product_cat');
                $args = array(
                    'post_type' => 'product',
                    'paged' => $paged,
                    'posts_per_page' => 4 //,
                    //'product_cat' => $cat,
                );
                $loop = new WP_Query($args);
                if ($loop->have_posts()) {
                    while ($loop->have_posts()) : $loop->the_post();
                        //wc_get_template_part('content', 'product');
                ?>
                        <div class="products__item">
                            <div class="item__img-holder">
                                <a href="<?php echo get_permalink($loop->ID); ?>"> <img class="product_img" src="<?php echo get_the_post_thumbnail_url($loop->post->ID); ?>" alt="" srcset=""></a>
                            </div>
                            <a href="<?php echo get_permalink($loop->ID); ?>" class="item__name"><?php echo get_the_title(); ?></a>
                            <p class="item__price"><?php echo get_post_meta(get_the_ID(), '_price', true); ?> <span class="currency">€</span></p>


                        </div>
                <?php
                    endwhile;
                    $total_pages = $loop->max_num_pages;

                    if ($total_pages > 1) {

                        $current_page = max(1, get_query_var('paged'));

                        echo paginate_links(array(
                            'base' => get_pagenum_link(1) . '%_%',
                            'format' => '/page/%#%',
                            'current' => $current_page,
                            'total' => $total_pages,
                            'prev_text'    => __('« prev'),
                            'next_text'    => __('next »'),
                        ));
                    }
                } else {
                    echo ('No products found');
                }


                wp_reset_postdata();

                ?>
            </div>

        </div>
    </section>
</main>
<?php get_footer() ?>
