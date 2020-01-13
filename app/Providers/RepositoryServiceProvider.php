<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repository\Character\CharacterRepositoryInterface;
use App\Repository\Character\CharacterRepository;
use App\Repository\Monster\MonsterRepositoryInterface;
use App\Repository\Monster\MonsterRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(CharacterRepositoryInterface::class,CharacterRepository::class);
        $this->app->bind(MonsterRepositoryInterface::class, MonsterRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
